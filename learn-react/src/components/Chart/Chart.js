import React from "react";

import ChartBar from "./ChartBar";

import "./Chart.scss";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map((elem) => {
        return elem.value;
    });
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((datapoint) => {
                return (
                    <ChartBar
                        key={datapoint.label}
                        label={datapoint.label}
                        value={datapoint.value}
                        maxValue={maxValue}
                    ></ChartBar>
                );
            })}
        </div>
    );
};

export default Chart;
