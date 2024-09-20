import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const OpenVulnerabilities = ({ pieData, COLORS }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <h2 className="text-xl font-bold">Open Vulnerabilities</h2>
    <PieChart width={200} height={200}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  </div>
);

export default OpenVulnerabilities;