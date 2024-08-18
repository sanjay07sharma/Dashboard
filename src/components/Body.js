import { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import ShowCharts from './ShowCharts';

const Body = () => {
    const [showSideBar, setShowSideBar] = useState(true);
    
    return (
        <div className='h-screen bg-gray-200'>
            {
                showSideBar && <SideBar/>
            }
            <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
            <ShowCharts />    
        </div>
    )
}

export default Body
