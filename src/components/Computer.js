import React from 'react'

const axios = require('axios').default;
const computerServiceUrl = 'https://collatz-sequence-computer-service.azurewebsites.net/collatz/';

export default class Computer extends React.Component {
    state = {
        seed: 0,
        sequence: [],
        display: "none"
    }

    handleChange = event => {
        console.log(`Event target value [${event.target.value}]`)
        this.setState({seed: event.target.value});
    };

    handleResponse = response => {
        console.log(response);
        this.setState({sequence: response.data.toString()})
    };

    handleClick = event => {
        event.preventDefault();
        console.log(`Event target value [${event.target.value}]`)
        console.log(`State value [${this.state.seed}]`)
        axios.get(`${computerServiceUrl}${this.state.seed}`, {crossdomain: true})
            .then(this.handleResponse)
            .catch(function (error) {
                console.log(error);
            })
            .then(this.displaySequenceOutput);
    };

    displaySequenceOutput = event => {
        console.log(event);
        this.setState({display: "block"});
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input id="seedInput"
                               type="number"
                               style={{width: "50%"}}
                               className="form-control form-control-lg m-2"
                               placeholder="Enter seed value"
                               onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary m-2"
                            onClick={this.handleClick}>Compute
                    </button>
                    <textarea id="sequenceOutput"
                              style={{display: this.state.display}}
                              rows="5"
                              className="form-control m-2"
                              placeholder="Sequence"
                              readOnly
                              value={this.state.sequence}/>
                </form>
            </div>
        )
    }
}