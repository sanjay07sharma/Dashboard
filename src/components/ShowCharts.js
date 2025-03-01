import React, { useState } from "react";
import TotalProjects from "./TotalProjects";
import AvgRiskScore from "./AvgRiskScore";
import OpenVulnerabilities from "./OpenVulnerabilities";
import Issues from "./Issues";
import Overdue from "./Overdue";
import SecurityKPITrend from "./SecurityKPITrend";
import ScoreSnapshot from "./ScoreSnapshot";
import LineChart from "./LineChart";

const ShowCharts = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // Sample data states
  const [kpiData, setKpiData] = useState([
    { name: "01 May 2023", low: 1000, medium: 10, high: 10, critical: 10 },
    { name: "06 May 2023", low: 1000, medium: 10, high: 10, critical: 10 },
    { name: "11 May 2023", low: 300, medium: 10, high: 10, critical: 10 },
    { name: "16 May 2023", low: 300, medium: 10, high: 10, critical: 10 },
    { name: "21 May 2023", low: 300, medium: 10, high: 10, critical: 10 },
    { name: "26 May 2023", low: 300, medium: 10, high: 10, critical: 10 },
  ]);

  const [scatterData, setScatterData] = useState([
    { x: 100, y: 9, size: 10, fill: "#FF8042" },
    { x: 200, y: 8, size: 10, fill: "#FF8042" },
    // ...truncated for brevity
  ]);

  const [pieData, setPieData] = useState([
    { name: "Critical", value: 333 },
    { name: "Medium", value: 3000 },
    { name: "High", value: 7000 },
    { name: "Low", value: 6000 },
  ]);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <TotalProjects />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <AvgRiskScore />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <OpenVulnerabilities pieData={pieData} COLORS={COLORS} />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Issues />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Overdue />
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <LineChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <SecurityKPITrend kpiData={kpiData} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <ScoreSnapshot scatterData={scatterData} />
        </div>
      </div>
    </div>
  );
};

export default ShowCharts;
