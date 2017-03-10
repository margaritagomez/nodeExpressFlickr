import React, {Component} from 'react';
import Photo from './photo';

class MatrixCol extends Component {

  render(){
    if (this.props.images){
      return(
        <div className="Column">
          { this.props.images.map(image => {
                          return (
                            <div className="row" key={image.id}>
                              <Photo farm={image.farm} server={image.server} id={image.id} secret={image.secret} name={image.name}/>
                            </div>
                          );
                      })
            }
        </div>
      );
    }
    else{
      return(
        <div>{' '}</div>
      );
    }

  }
}

export default MatrixCol;
