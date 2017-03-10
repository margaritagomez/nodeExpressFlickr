import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/title';
import Instructions from './components/instructions';
import Search from './components/search';
import MatrixCol from './components/matrixCol';

const ROOT_URL = '/flickr/'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            word: '',
            colors: ['brown','red','orange','yellow','green','blue','purple','pink'],
            images:[]
        }
        this.handleInput = this.handleInput.bind(this);
        this.getPictures = this.getPictures.bind(this);
    }

    getPictures(method) {
      this.state.colors.map((color, i )=>{
        axios.get(ROOT_URL + this.state.word +" "+ color,{params:{"method":method}}).then(response => {
          console.log(response);
            var imgs = response.data.photos.photo;
            this.state.images[i]=imgs;
            this.setState({images: this.state.images}, () => {
                console.log('hola');
            });
          }

        ).catch(function(error) {
            console.log(error);
        });
      });

    }

    handleInput(x) {
        this.setState({
            word: x
        }, () => {
            console.log(this.state.word);
        });
    }

    render() {
        return (
            <div className="App">
                <div>
                    <div className="row">
                        <Title/>
                    </div>
                    <div className="row">
                        <br/></div>
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8"><Instructions/></div>
                      <div className="col-md-2"></div>
                    </div>
                    <div className="row">
                      <div>
                        <Search val={this.state.word} onTextInput={this.handleInput} click={this.getPictures.bind(this)}/>
                      </div>

                    </div>
                </div>

                <div className="row"><br/></div>

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[0]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[1]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[2]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[3]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[4]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[5]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[6]}/></div>
                    <div className="col-md-1"><MatrixCol images={this.state.images[7]}/></div>
                    <div className="col-md-2"></div>
                </div>

            </div>
        );
    }
}

export default App;
