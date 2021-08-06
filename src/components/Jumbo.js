import React from 'react'

export default class Jumbo extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="jumbotron jumbotron-fluid m-2">
                        <h1 className="display-4">CCSC: Collatz conjecture sequence computer</h1>
                        <p className="lead">Compute the Collatz conjecture sequence for any given seed value:</p>
                        <button type="button" className="btn btn-link btn-sm">>
                            <a href="https://en.wikipedia.org/wiki/Collatz_conjecture">Background</a>
                        </button>
                        <button type="button" className="btn btn-link btn-sm">>
                            <a href="https://github.com/gdiegel/collatz-sequence-computer-app">Frontend</a>
                        </button>
                        <button type="button" className="btn btn-link btn-sm">>
                            <a href="https://github.com/gdiegel/collatz-sequence-computer-service">Backend</a>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
