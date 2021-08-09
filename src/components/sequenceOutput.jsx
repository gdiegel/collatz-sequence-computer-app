import React from "react";

export default props => (
    <div className="container">
        <textarea id="sequenceOutput"
                  style={{display: props.display}}
                  rows="5"
                  className="form-control m-2"
                  readOnly
                  value={props.sequence}/>
    </div>
)