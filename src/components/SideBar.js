import React from 'react';

const SideBar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Projects', icon: '📁' },
    { name: 'Vulnerabilities', icon: '🛡️' },
    { name: 'Risk Analysis', icon: '📈' },
    { name: 'Reports', icon: '📝' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-lg">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Security Dashboard</h2>
      </div>
      
      <nav className="mt-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors ${
                  item.name === 'Dashboard' ? 'bg-purple-50 text-purple-700 border-r-4 border-purple-500' : ''
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 w-full p-4 border-t">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span>👤</span>
          </div>
          <div className="ml-3">
            <p className="font-medium text-gray-800">User Name</p>
            <p className="text-sm text-gray-500">Security Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
