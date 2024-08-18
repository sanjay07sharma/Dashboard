import React from 'react'
import { FILTER_IMG, HAMBURGER_IMG, THREE_DOTS_IMG } from '../utils/constants';

const Header = (props) => {
    const handleHamburgerClick = () => {
        props.setShowSideBar(!props.showSideBar);
        document.querySelector('.header').classList.toggle('ml-0');
        document.querySelector('.SelectContainer').classList.toggle('ml-[104rem]');
    }

    return (
        <div className='flex p-4 h-16 md:shadow-lg w-screen bg-white'>
            <img src={HAMBURGER_IMG} alt='hambugerImg' className='header ml-96' onClick={handleHamburgerClick}/>
            <div className='m-4'>
                <h2 className='text-xl mt-[-12%]'>Dashboard</h2>
            </div>
            <div className='SelectContainer flex ml-[80rem]'>
                <select className='DropDown bg-white shadow-md text-black border border-gray-300 px-2 font-bold rounded-lg w-44'>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                </select>
                <button className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-lg col-span-1 ml-2 flex w-44 space-between'>
                <p>Show FIlters</p>
                <img src={FILTER_IMG} alt="FilterIMG" className='h-4 w-4 mt-2 ml-2 invert'/>
                </button>
                <img src={THREE_DOTS_IMG} alt='hambugerImg' className=''/>
            </div>
        </div>
    )
}

export default Header;
