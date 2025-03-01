import React from "react";
import { FILTER_IMG, HAMBURGER_IMG, THREE_DOTS_IMG } from "../utils/constants";

const Header = ({ showSideBar, setShowSideBar }) => {
  const handleHamburgerClick = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="sticky top-0 z-20 flex items-center h-16 w-full bg-white shadow-md px-4">
      <div className={`flex items-center transition-all duration-300 ${showSideBar ? 'ml-4' : 'ml-0'}`}>
        <button 
          onClick={handleHamburgerClick}
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <img
            src={HAMBURGER_IMG}
            alt="Toggle Menu"
            className="h-6 w-6"
          />
        </button>
        <h2 className="text-xl font-semibold ml-3">Dashboard</h2>
      </div>
      
      <div className="flex items-center ml-auto">
        <select className="bg-white text-gray-800 border border-gray-300 rounded-lg px-3 py-2 mr-3 focus:outline-none focus:ring-2 focus:ring-purple-500">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg flex items-center mr-3 transition-colors duration-200">
          <span>Show Filters</span>
          <img
            src={FILTER_IMG}
            alt="Filter"
            className="h-4 w-4 ml-2 invert"
          />
        </button>
        
        <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none">
          <img 
            src={THREE_DOTS_IMG} 
            alt="More Options" 
            className="h-6 w-6" 
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
