import React from 'react'

const axios = require('axios').default;
const baseUrl = 'https://collatz-sequence-computer-service.azurewebsites.net/collatz/';

export default class SeedInput extends React.Component {
    state = {
        value: 0
    }

    /**
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    handleChange = (event) => {
        console.log(`Event target value [${event.target.value}]`)
        this.setState({value: event.target.value});
    };

    /**
     * @param {React.FormEvent<HTMLButtonElement>} event
     */
    handleClick = (event) => {
        event.preventDefault();
        console.log(`Event target value [${event.target.value}]`)
        console.log(`State value [${this.state.value}]`)
        // this.setState({value: event.target.value});
        axios.get(`${baseUrl}${this.state.value}`, {crossdomain: true})
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    };

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <input type="number" className="form-control form-control-lg m-2" id="seedInput" placeholder="Enter seed value"
                               onChange={this.handleChange}/>
                    </div>
                    <button className="btn btn-primary m-2" onClick={this.handleClick}>Compute</button>
                </form>
            </div>
        )
    }

}