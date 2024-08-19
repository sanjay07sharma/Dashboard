import React from 'react';
import DonutChartComponent from './DoughnutChart';
import ProgressBarComponent from './ProgressBar';

const StatisticCard = ({ title, value, subValues }) => (
  <div className="text-center flex">
    <div className="text-3xl font-bold">{value}</div>
    <div className="flex flex-col items-center justify-center space-x-2 mb-4">
      <div className="text-sm">{title}</div>
      {subValues && (
        <ProgressBarComponent subValues={subValues} />
      )}
    </div>
  </div>
);

const DataWithDonut = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[800px] h-[300px]">
      <div className="flex justify-between items-center">
        <StatisticCard
          title="Total Projects"
          value="91"
          subValues={[
            { value: "56", colorClass: "bg-green-500" },
            { value: "44", colorClass: "bg-red-500" }
          ]}
        />
        {/* <StatisticCard title="Avg. Risk Score" value="1109" />
        <StatisticCard title="Avg. Risk Score" value="1109" /> */}

        <div className="text-center">
          <StatisticCard title="Avg. Risk Score" value="1109" />
          <div className="mt-2">
            <StatisticCard title="Avg. Vulnerability Score" value="4.45 / 10" />
          </div>
        </div>

        <div className="flex flex-col items-center h-[200px]">
          <div className="text-center">
            <div className="text-lg font-semibold">Open Vulnerabilities</div>
          <div style={{ width: '200px', height: '200px' }}>
              <DonutChartComponent />
            </div>
            <div className="flex items-center justify-center space-x-2 mt-2">
              <div className="text-red-500">333</div>
              <div className="text-yellow-500">3K</div>
              <div className="text-blue-500">7K</div>
              <div className="text-gray-500">6K</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataWithDonut;
