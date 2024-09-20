import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

const ScoreSnapshot = ({ scatterData }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl font-bold">Score Snapshot</h2>
      <div className="flex items-center">
        <span className="font-bold text-green-500">Vuln. Score</span>
        <span className="ml-2 text-gray-500">
          <span className="font-bold">Risk Score</span>
        </span>
        <span className="ml-2 text-gray-500">
          <span className="font-bold">Project</span>
        </span>
        <span className="ml-2 text-gray-500">
          <span className="font-bold">Product</span>
        </span>
        <span className="ml-2 text-gray-500">
          <span className="font-bold">Team</span>
        </span>
      </div>
    </div>
    <ScatterChart
      width={730}
      height={300}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" dataKey="x" />
      <YAxis type="number" dataKey="y" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Scatter name="A school" data={scatterData} fill="#8884d8" shape="circle" size="10">
        {scatterData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} size={entry.size} />
        ))}
      </Scatter>
    </ScatterChart>
  </div>
);

export default ScoreSnapshot;