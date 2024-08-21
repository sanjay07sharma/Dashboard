  import React, { useState } from "react";
  import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    PieChart,
    Pie,
    Cell,
    ScatterChart,
    Scatter,
    Line,
    LineChart,
  } from "recharts";

  const ShowCharts = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const [kpiData, setKpiData] = useState([
      {
        name: "01 May 2023",
        low: 1000,
        medium: 10,
        high: 10,
        critical: 10,
      },
      {
        name: "06 May 2023",
        low: 1000,
        medium: 10,
        high: 10,
        critical: 10,
      },
      {
        name: "11 May 2023",
        low: 300,
        medium: 10,
        high: 10,
        critical: 10,
      },
      {
        name: "16 May 2023",
        low: 300,
        medium: 10,
        high: 10,
        critical: 10,
      },
      {
        name: "21 May 2023",
        low: 300,
        medium: 10,
        high: 10,
        critical: 10,
      },
      {
        name: "26 May 2023",
        low: 300,
        medium: 10,
        high: 10,
        critical: 10,
      },
    ]);
    const [scatterData, setScatterData] = useState([
      { x: 100, y: 9, size: 10, fill: "#FF8042" },
      { x: 200, y: 8, size: 10, fill: "#FF8042" },
      { x: 300, y: 7, size: 10, fill: "#FF8042" },
      { x: 400, y: 6, size: 10, fill: "#FFBB28" },
      { x: 500, y: 5, size: 10, fill: "#FFBB28" },
      { x: 600, y: 4, size: 10, fill: "#00C49F" },
      { x: 700, y: 3, size: 10, fill: "#00C49F" },
      { x: 800, y: 2, size: 10, fill: "#00C49F" },
      { x: 900, y: 5, size: 10, fill: "#FFBB28" },
      { x: 1000, y: 5, size: 10, fill: "#FFBB28" },
      { x: 1100, y: 5, size: 10, fill: "#FFBB28" },
      { x: 1200, y: 4, size: 10, fill: "#FFBB28" },
      { x: 1300, y: 4, size: 10, fill: "#FFBB28" },
      { x: 1400, y: 4, size: 10, fill: "#FFBB28" },
      { x: 1500, y: 4, size: 10, fill: "#FF8042" },
      { x: 2500, y: 4, size: 10, fill: "#FF8042" },
      { x: 300, y: 4, size: 10, fill: "#00C49F" },
      { x: 300, y: 4, size: 10, fill: "#00C49F" },
      { x: 300, y: 4, size: 10, fill: "#00C49F" },
      { x: 300, y: 4, size: 10, fill: "#00C49F" },
      { x: 300, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 400, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
      { x: 500, y: 4, size: 10, fill: "#00C49F" },
    ]);

    const [pieData, setPieData] = useState([
      { name: "Critical", value: 333 },
      { name: "Medium", value: 3000 },
      { name: "High", value: 7000 },
      { name: "Low", value: 6000 },
    ]);
    return (
      <div className="flex h-screen bg-gray-100 ml-96">
        <div className="w-4/5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Total Projects</h2>
                <div className="flex items-center">
                  <span className="font-bold text-green-500">91</span>
                  <span className="ml-2 text-gray-500">
                    <span className="font-bold">56</span>/
                    <span className="font-bold">16</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Projects Failing SC</h2>
                <span className="font-bold text-red-500">4</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Projects Failing ASVS</h2>
                <span className="font-bold text-red-500">12</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="mb-2">
                <h2 className="text-xl font-bold">Avg. Risk Score</h2>
                <span className="text-3xl font-bold">1109</span>
              </div>
              <div className="mb-2">
                <h2 className="text-xl font-bold">Avg. Vuln. Score</h2>
                <span className="text-3xl font-bold">4.45 / 10</span>
              </div>
            </div>
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
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="mb-2">
                <h2 className="text-xl font-bold">Issues</h2>
                <p className="text-gray-500">Vulns. with an open issue</p>
                <span className="text-2xl font-bold">Total: 3024</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-1/3">
                  <span className="text-gray-500">15</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">673</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">1K</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">954</span>
                </div>
              </div>
              <div className="mb-2 mt-4">
                <h2 className="text-xl font-bold">WOE</h2>
                <p className="text-gray-500">Window of Exposure in days</p>
                <span className="text-2xl font-bold">Avg: 725</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-1/3">
                  <span className="text-gray-500">350</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">693</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">758</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">726</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="mb-2">
                <h2 className="text-xl font-bold">Overdue</h2>
                <p className="text-gray-500">Vulns exceeding SLA</p>
                <span className="text-2xl font-bold">Total: 944</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-1/3">
                  <span className="text-gray-500">2</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">198</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">328</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">416</span>
                </div>
              </div>
              <div className="mb-2 mt-4">
                <h2 className="text-xl font-bold">MTF</h2>
                <p className="text-gray-500">Mean time to fix in days</p>
                <span className="text-2xl font-bold">Avg: 87</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="w-1/3">
                  <span className="text-gray-500">1</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">208</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">81</span>
                </div>
                <div className="w-1/3">
                  <span className="text-gray-500">67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
                <Line
                  type="monotone"
                  dataKey="low"
                  stroke="#0088FE"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="medium"
                  stroke="#FFBB28"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="high"
                  stroke="#FF8042"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="critical"
                  stroke="#FF8042"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </div>
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
                <Scatter
                  name="A school"
                  data={scatterData}
                  fill="#8884d8"
                  shape="circle"
                  size="10"
                >
                  {scatterData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.fill}
                      size={entry.size}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default ShowCharts;
