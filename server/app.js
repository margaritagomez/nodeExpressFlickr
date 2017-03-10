// server/app.js
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const flickr = require("flickrapi");
const fs = require("fs");

const app = express();

var cors =require('cors');
app.use(cors());

// Assumes that there are two files containing the keys
// $PROJECT_HOME/server/api_key.txt
// $PROJECT_HOME/server/api_secret.txt
function getApiKeys(callback, errorcallback) {
	fs.readFile(path.resolve(__dirname,"./api_key.txt"), "utf-8", (err, api_key) => {
		if (err) {
			errorcallback(err);
			return;
		}
		fs.readFile(path.resolve(__dirname,"./api_secret.txt"), "utf-8",(err, api_secret) => {
			if (err) {
				errorcallback(err);
				return;
			}
			callback(api_key.trim(), api_secret.trim());
		});
	});
}

// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Searches Flickr for a specific query
app.get('/flickr/:query', function (req, res) {
	console.log("Flickr call query=" + req.params['query'] );
	getApiKeys((api_key, api_secret) => {
		const Flickr = require("flickrapi"),
	    flickrOptions = {
	      api_key: api_key,
	      secret: api_secret
	    };
	    console.log(api_key);
	    console.log(api_secret);
		Flickr.tokenOnly(flickrOptions, function(error, flickr) {
			console.log("tokenOnly");
			if (error) {
				res.send(error);
				return;
			}
		  // we can now use "flickr" as our API object,
		  // but we can only call public methods and access public data
			var method=req.query.method;
			var srt = "relevance";
			if(method==="i"){
				srt="interestingness-asc";
			}else if(method==="dt"){
				srt="date-taken-desc";
			}else if(method==="dp"){
				srt="date-posted-desc";
			}
		  flickr.photos.search({
		  	safe:1,
		  	sort:srt,
		  	text:req.params["query"],
				per_page: 8
		  }, (err, data) => {
		  	if (err) res.send(err);
		  	console.log("Got flickr data sending it");
		  	res.send(data);
		  });
		});

	}, (err) => {
		console.log(err);
		res.send("Error!");
	})
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


module.exports = app;
