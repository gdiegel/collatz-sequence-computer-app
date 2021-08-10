import React from "react";

const handleKeyDown = event => event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key));

export default props => (
    <div className="container" style={{marginTop: 25}}>
        <form>
            <div className="form-group">
                <input id="seedInput"
                       type="number"
                       style={{width: "40%"}}
                       className="form-control form-control-lg m-2"
                       placeholder="Enter a positive integer seed value"
                       onChange={props.onChange}
                       onKeyDown={handleKeyDown}/>
                <button className="btn btn-primary m-2" onClick={props.onClick}>Compute</button>
                <div className="alert alert-warning m-2" role="alert" style={{display: props.displayWarning}}>
                    {props.alertText}
                </div>
            </div>
        </form>
    </div>
)