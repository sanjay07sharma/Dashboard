  import React, { useState } from "react";
  import TotalProjects from "./TotalProjects";
  import AvgRiskScore from "./AvgRiskScore";
  import OpenVulnerabilities from "./OpenVulnerabilities";
  import Issues from "./Issues";
  import Overdue from "./Overdue";
  import SecurityKPITrend from "./SecurityKPITrend";
  import ScoreSnapshot from "./ScoreSnapshot";
  
  const ShowCharts = () => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
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
    <div className="flex h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-7xl p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TotalProjects />
          <AvgRiskScore />
          <OpenVulnerabilities pieData={pieData} COLORS={COLORS} />
          <Issues />
          <Overdue />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <SecurityKPITrend kpiData={kpiData} />
          <ScoreSnapshot scatterData={scatterData} />
        </div>
      </div>
    </div>
  );
};
  
  export default ShowCharts;