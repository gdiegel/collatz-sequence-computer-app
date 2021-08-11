import React from "react";
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";

export default props => {
    let data = [];
    if (props.sequence && props.sequence.length > 0) {
        data = props.sequence.map((entry, index) => ({idx: index + 1, val: entry}));
    }

    const formatTicks = number => {
        return Number.parseFloat(number).toExponential(2);
    };

    return (
        <div className="container" id="visualization">
            <LineChart
                style={{display: props.display}}
                width={1320}
                height={500}
                data={data}
                margin={{top: 5, right: 15, left: 30, bottom: 5}}>
                <XAxis dataKey="idx"/>
                <YAxis dataKey="val" tickFormatter={formatTicks}/>
                <Tooltip/>
                <CartesianGrid stroke="#f5f5f5"/>
                <Line type="monotone" dataKey="val" stroke="#ff7300" yAxisId={0}/>
            </LineChart>
        </div>
    );
}