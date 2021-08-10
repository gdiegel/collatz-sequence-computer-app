import React from "react";

export default props => (
    <div className="container" style={{marginTop: 25}}>
        <form>
            <div className="form-group">
                <input id="seedInput"
                       type="number"
                       style={{width: "40%"}}
                       className="form-control form-control-lg m-2"
                       placeholder="Enter seed value"
                       onChange={props.onChange}/>
                <button className="btn btn-primary m-2" onClick={props.onClick}>Compute</button>
                <div className="alert alert-warning m-2" role="alert" style={{display: props.displayWarning}}>
                    {props.alertText}
                </div>
            </div>
        </form>
    </div>
)