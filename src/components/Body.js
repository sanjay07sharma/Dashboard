import { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ShowCharts from './ShowCharts';

const Body = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    
    return (
        <div className='min-h-screen bg-gray-200 flex flex-col'>
            <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <div className="flex flex-grow overflow-hidden">
                {/* Fixed sidebar with transition */}
                <div 
                    className={`fixed top-16 h-full transform transition-transform duration-300 ease-in-out z-10 ${
                        showSideBar ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <SideBar />
                </div>
                
                {/* Main content that shifts when sidebar opens */}
                <div 
                    className={`flex-grow transition-all duration-300 ease-in-out ${
                        showSideBar ? 'ml-64' : 'ml-0'
                    }`}
                >
                    <ShowCharts />
                </div>
            </div>
        </div>
    )
}

export default Body
