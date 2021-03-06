import React from "react";

export default () => (
    <div className="container">
        <div className="jumbotron jumbotron-fluid m-2">
            <h1 className="display-4">Collatz conjecture sequence computer</h1>
            <p className="lead">Enter a seed value and click 'Compute' to compute the sequence.</p>
            <a type="button" className="btn btn-primary btn-sm" role="button"
               href="https://en.wikipedia.org/wiki/Collatz_conjecture">Learn more</a>
            <a type="button" className="btn btn-primary btn-sm" role="button"
               style={{marginRight: "5px", marginLeft: "5px"}}
               href="https://github.com/gdiegel/collatz-sequence-computer-app">Frontend</a>
            <a type="button" className="btn btn-primary btn-sm" role="button"
               href="https://github.com/gdiegel/collatz-sequence-computer-service">Backend</a>
        </div>
    </div>
)
