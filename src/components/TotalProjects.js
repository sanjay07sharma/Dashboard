import React from "react";

const TotalProjects = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Total Projects</h2>
      <div className="flex items-center">
        <span className="font-bold text-green-500 text-xl">91</span>
        <span className="ml-2 text-gray-500 text-lg">
          <span className="font-bold">56</span>/
          <span className="font-bold">16</span>
        </span>
      </div>
    </div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Projects Failing SC</h2>
      <span className="font-bold text-red-500 text-xl">4</span>
    </div>
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">Projects Failing ASVS</h2>
      <span className="font-bold text-red-500 text-xl">12</span>
    </div>
  </div>
);

export default TotalProjects;