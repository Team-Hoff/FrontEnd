import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Sidebar from './Sidebar';

const Discussion = () => {
    return (
        <div className='w-full flex flex-col md:flex-row h-max'>
            <Sidebar />
            <div className='w-full h-screen flex flex-col gap-10 pt-10 px-5 pb-10 bg-gray-200'>
                <span className='text-right'>
                    <button className="w-[300px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        <AiOutlinePlus size={20} />    Start a new Topic
                    </button>
                </span>
                <div className='h-full px-6 pt-4 bg-white w-full'>

                </div>

            </div>
            {/* <div className='w-full md:w-[40%] h-screen flex flex-col gap-10 pt-10 bg-white text-center'>
                <div className='px-6'>


                </div>

                <div className='px-6 pt-4'>
                    <div className='bg-gray-500 w-full h-[60vh]'>
                        <p className='text-left pl-4 pt-2'>Top Users</p>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Discussion