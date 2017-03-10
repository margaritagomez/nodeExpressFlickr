import React, {Component} from 'react';

class Photo extends Component {

  constructor(props){
    super(props);
    this.state={
      hola:''
    }
  }

  render(){
    var url = "https://farm"+this.props.farm+".staticflickr.com/"+this.props.server+"/"+this.props.id+"_"+this.props.secret+"_s.jpg";
    return(
      <div>
        <img src={url} alt={this.props.name}/>
      </div>
    );
  }

}
export default Photo;
