import React from "react";

const axios = require("axios").default;
const computerServiceUrl = "https://collatz-sequence-computer-service.azurewebsites.net/collatz/";

export default class Computer extends React.Component {
    state = {
        seed: 0,
        sequence: [],
        display: "none"
    };

    handleChange = async event => {
        console.log(`onChange target value [${event.target.value}]`);
        await this.setState({seed: event.target.value});
    };

    handleResponse = response => {
        this.setState({sequence: response.data.toString()});
    };

    handleError = error => {
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            this.setState({sequence: error.response.data});
        } else if (error.request) {
            console.log(error.request);
        }
    };

    handleClick = async event => {
        event.preventDefault();
        console.log(`State value [${this.state.seed}]`);
        await axios.get(`${computerServiceUrl}${this.state.seed}`, {crossdomain: true})
            .then(this.handleResponse)
            .catch(this.handleError)
            .then(this.displaySequenceOutput);
    };

    displaySequenceOutput = () => {
        this.setState({display: "block"});
    };

    render() {
        return (
            <div className="container" style={{"margin-top": 25}}>
                <form>
                    <div className="form-group">
                        <input id="seedInput"
                               type="number"
                               style={{width: "40%"}}
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
                              readOnly
                              value={this.state.sequence}/>
                </form>
            </div>
        );
    }
}