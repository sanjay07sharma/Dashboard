import React from "react";

const Issues = () => (
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
);

export default Issues;