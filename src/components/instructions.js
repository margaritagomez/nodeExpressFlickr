import React, {Component} from 'react';
import {Well} from 'react-bootstrap';

class Instructions extends Component {

    render() {
        return (
            <div>
              <Well>
                <p className="Instructions">
                  Search for something by relevance on Flickr and we will get you a rainbow of it. <br/>
                  You may search by interestingness, the date that the picture was taken or posted! <br/>
                  However, the rainbow function will work best if you search by relevance.
                </p>
              </Well>
            </div>
        );
    }
}
export default Instructions;
