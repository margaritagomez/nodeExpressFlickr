import React, {Component} from 'react';
import {FormControl, Button} from 'react-bootstrap';

class Search extends Component {

    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {

        this.props.onTextInput(e.target.value);
    }

    render() {
        return (
            <div >
                <FormControl type="text" placeholder="Type a word" value={this.props.val} onSubmit={this.props.click} onChange={this.handleInputChange}></FormControl>
                <br/>
                <div className="Buttons">
                    <Button bsStyle="primary" onClick={() => {
                        this.props.click("r")
                    }}>Search by Relevance</Button>
                    {' '}
                    <Button bsStyle="success" onClick={() => {
                        this.props.click("i")
                    }}>Search by Interestingness</Button>
                    {' '}
                    <Button bsStyle="warning" onClick={() => {
                        this.props.click("dt")
                    }}>Search by Date-Taken
                    </Button>
                    {' '}
                    <Button bsStyle="danger" onClick={() => {
                        this.props.click("dp")
                    }}>Search by Date-Posted</Button>
                </div>
            </div>
        );
    }
}

export default Search;
