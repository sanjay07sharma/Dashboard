import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SecurityKPITrend = ({ kpiData }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <h2 className="text-xl font-bold">Security KPI Trend</h2>
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <Line type="monotone" dataKey="critical" stroke="#FF0000" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default SecurityKPITrend;
