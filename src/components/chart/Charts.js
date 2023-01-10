import "./Chart.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <div className="chartTitle">{title}</div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          {grid && <CartesianGrid stroke="#82ca9d" strokeDasharray="3 5" />}
          <XAxis dataKey="name" />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
