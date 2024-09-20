import React from "react";

const Overdue = () => (
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
);

export default Overdue;