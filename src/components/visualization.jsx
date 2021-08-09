import React from "react";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export default props => {
    return (
        <div className="container" id="visualization">
            <LineChart
                style={{display: props.display}}
                width={1320}
                height={500}
                data={props.sequence.map((entry, index) => ({idx: index + 1, val: entry}))}
                margin={{top: 5, right: 10, left: 10, bottom: 5}}>
                <XAxis dataKey="idx"/>
                <YAxis dataKey="val"/>
                <Tooltip/>
                <CartesianGrid stroke="#f5f5f5"/>
                <Line type="monotone" dataKey="val" stroke="#ff7300" yAxisId={0}/>
            </LineChart>
        </div>
    );
}