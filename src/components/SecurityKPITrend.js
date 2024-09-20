import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const SecurityKPITrend = ({ kpiData }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <h2 className="text-xl font-bold">Security KPI Trend</h2>
    <LineChart
      width={730}
      height={300}
      data={kpiData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#f5f5f5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="low" stroke="#0088FE" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="medium" stroke="#FFBB28" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="high" stroke="#FF8042" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="critical" stroke="#FF8042" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default SecurityKPITrend;