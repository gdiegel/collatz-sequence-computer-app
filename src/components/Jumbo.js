import React from 'react'

export default class Jumbo extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="jumbotron jumbotron-fluid m-2">
                        <h1 className="display-4">CCSC: Collatz conjecture sequence computer</h1>
                        <p className="lead">Compute the Collatz conjecture sequence for any given seed value:</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
