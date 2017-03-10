import React, {Component} from 'react';
import {Well} from 'react-bootstrap';

class Instructions extends Component {

    render() {
        return (
            <div>
              <Well>
                <p className="Instructions">
                  Search for something on Flickr and we will get you a rainbow of it.
                </p>
              </Well>
            </div>
        );
    }
}
export default Instructions;
