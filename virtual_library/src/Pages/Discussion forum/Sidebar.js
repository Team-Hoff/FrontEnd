import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const Sidebar = () => {

    const [nav, setNav] = useState(false)

    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setNav(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })

    return (
        <div className='w-full p-3 flex md:flex-col md:w-[20%]   md:top-0 md:gap-20 gap-4 max-h-full flex-none min-w-[280px] bg-gray-900' >
            <div className='pt-1'><GiHamburgerMenu size={30} color='dodgerblue' className='md:hidden -top-5' onClick={() => setNav(true)} /></div>

            <div className='px-2 pt-1' >
                <div className='relative'>
                    <div className='absolute top-3 left-0 right-3 flex items-center pl-1 z-5 w-[20px]'>
                        <AiOutlineSearch className='text-white' />
                    </div>

                </div>
                <input type="text" placeholder='Search for topic' className='w-[55vw] md:w-full rounded px-4 py-2.5 text-sm font-light bg-gray-800 text-gray-400 outline-0 border-0 z-10 focus:outline-none focus:ring-1 focus:ring-gray-500' />
            </div>
            <div className='px-6'>
                <hr className='border-gray-700 hidden' />
            </div>

            <nav>
                <ul className='hidden md:flex flex-col gap-3 pl-6 px-6 '>
                    <li><NavLink to="#" className='inline-block w-full pr-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>Explore Topic</NavLink></li>
                    <li><NavLink to="#" className='inline-block w-full pr-4 py-2 text-gray-300 hover:bg-gray-800  hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>My Topics</NavLink></li>
                    <li><NavLink to="#" className='inline-block w-full text-gray-300 pr-4 py-2 hover:bg-gray-800  hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>My Answers</NavLink></li>
                </ul>
            </nav>

            <div className={nav ? 'absolute top-0 left-0 w-full z-20 block bg-[rgb(49,49,49,0.8)] p-4' : 'hidden'}>
                <AiOutlineClose size={30} onClick={() => setNav(false)} color='white' className='absolute right-4 top-4  cursor-pointer' />
                <nav ref={menuRef}>
                    <ul className='flex flex-col gap-3 pt-5 pl-6 px-6'>
                        <li><NavLink to="#" className='inline-block w-full pr-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>Explore Topic</NavLink></li>
                        <li><NavLink to="#" className='inline-block w-full pr-4 py-2 text-gray-300 hover:bg-gray-800  hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>My Topics</NavLink></li>
                        <li><NavLink to="#" className='inline-block w-full text-gray-300 pr-4 py-2 hover:bg-gray-800  hover:text-white rounded pl-5 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:bg-gray-700 focus:text-white no-underline'>My Answers</NavLink></li>
                    </ul>
                </nav>
            </div>



        </div>
    )
}

export default Sidebar