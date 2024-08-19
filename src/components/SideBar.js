import React from "react";
import {
  AUTOMATION_ICON_IMG,
  DASHBOARD_ICON_IMG,
  DOCUMENTATION_ICON_IMG,
  HOME_ICON_IMG,
  INTEGRATIONS_ICON_IMG,
  LOGGED_USERS_ICON_IMG,
  LOGS_ICON_IMG,
  PROJECTS_ICON_IMG,
  REQUESTS_ICON_IMG,
  SBOM_ICON_IMG,
  SCANS_ICON_IMG,
  USERS_ICON_IMG,
  VULNERABILITIES_ICON_IMG,
} from "../utils/constants";

const SideBar = () => {
  <span class="ml-2 font-medium">Logs</span>;
  /*
    <span class="ml-2 font-medium">Dashboard</span>
    <span class="ml-2 font-medium">Projects & Products</span>
    <span class="ml-2 font-medium">Scans</span>
    <span class="ml-2 font-medium">Vulnerabilities</span>
    <span class="ml-2 font-medium">SBOM</span>
    <span class="ml-2 font-medium">Users & Teams</span>
    <span class="ml-2 font-medium">Automation</span>
    <span class="ml-2 font-medium">Integrations</span>
    <span class="ml-2 font-medium">Logs</span>
    <span class="ml-2 font-medium">Suppression Requests</span>
    <span class="ml-2 font-medium">Documentation</span>
    <span class="ml-2 font-medium">suphi</span>
    */
  const dashboardItemList = [
    { name: "Dashboard", icon: HOME_ICON_IMG },
    { name: "Projects & Products", icon: PROJECTS_ICON_IMG },
    { name: "Scans", icon: SCANS_ICON_IMG },
    { name: "Vulnerabilities", icon: VULNERABILITIES_ICON_IMG },
    { name: "SBOM", icon: SBOM_ICON_IMG },
    { name: "Users & Teams", icon: USERS_ICON_IMG },
    { name: "Automation", icon: AUTOMATION_ICON_IMG },
    { name: "Integrations", icon: INTEGRATIONS_ICON_IMG },
    { name: "Logs", icon: LOGS_ICON_IMG },
  ];
  
  const dashboardFooterItemList = [{
    name: "Suppression Requests",
    icon: REQUESTS_ICON_IMG,
  }, {
    name: "Documentation",
    icon: DOCUMENTATION_ICON_IMG,
  }, {
    name: "UserName",
    icon: LOGGED_USERS_ICON_IMG,
  }];

  return (
    <div className="shadow-md h-screen bg-blue-900 text-white fixed w-96">
      <div className="flex border-b-2 border-black">
        <img src={DASHBOARD_ICON_IMG} alt="DashboardIcon" className="h-8 w-8 mt-2 ml-2"/>
        <h1 className="text-2xl p-2">Tracker</h1>
      </div>
      <div className="">
        <ul>
          {dashboardItemList.map((item, index) => {
            return (
              <li className="m-2 p-2 mb-4" key={index}>
                <button className="w-full h-10 text-left pl-4 flex hover:border border-gray-500 hover:rounded-lg">
                  <img
                    src={item.icon}
                    alt="homeIcon"
                    className="h-6 w-6 mt-1 invert"
                  />
                  <p className="ml-4 mt-1">{item.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[40%] border border-t-black border-b-blue-900">
        <ul>
            {
                dashboardFooterItemList.map((item, index) => {
                    return (
                        <li className="m-2 p-2 mb-4" key={index}>
                            <button className="w-full h-14 text-left pl-4 flex hover:border border-gray-500 hover:rounded-lg">
                                <img src={item.icon} alt="homeIcon" className="h-6 w-6 mt-4 invert"/>
                                <p className="ml-4 mt-4">{item.name}</p>
                            </button>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
