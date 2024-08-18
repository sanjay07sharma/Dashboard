import React from 'react'
import DonutChartComponent from './DoughnutChart';

const DataWithDonut = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            {/* Total Projects */}
            <div className="text-center">
              <div className="text-lg font-semibold">Total Projects</div>
              <div className="flex items-center justify-center space-x-2">
                <div className="text-3xl font-bold">91</div>
                <div className="flex flex-col text-sm">
                  <div className="text-green-500">56</div>
                  <div className="text-red-500">16</div>
                </div>
              </div>
            </div>
    
            {/* Risk and Vulnerability Scores */}
            <div className="text-center">
              <div className="text-lg font-semibold">Avg. Risk Score</div>
              <div className="text-3xl font-bold">1109</div>
              <div className="mt-2">
                <div className="text-lg font-semibold">Avg. Vulnerability Score</div>
                <div className="text-xl font-bold">4.45 / 10</div>
              </div>
            </div>
    
            {/* Donut Chart */}
            <div className="flex flex-col items-center">
              <DonutChartComponent />
              <div className="mt-4">
                <div className="text-lg font-semibold">Open Vulnerabilities</div>
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

export default DataWithDonut
