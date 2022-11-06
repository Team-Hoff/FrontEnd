import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Sidebar from './Sidebar';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import GoBack from '../../Components/GoBack/GoBack';
import Topic from './Comments/Topic';


const Discussion = () => {
    const [newTopic, setNewTopic] = useState(false)
    const [loading, setLoading] = useState(true);

    return (
        <>
            {loading && <div>
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>}
            <div id='discuss'>

                <Navbar />



                <div className='w-full flex flex-col h-full min-h-screen bg-gray-200'>
                    <Sidebar />

                    <div style={{ marginTop: '25px', width: '60px' }}><GoBack /></div>
                    <div className='w-full h-max min-h-screen flex flex-col gap-10 pt-10 px-5 pb-10 '>
                        <span className='text-right'>
                            <button onClick={() => setNewTopic(true)} className="w-[300px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                <AiOutlinePlus size={20} />    Start a new Topic
                            </button>
                        </span>

                        <div className='h-full min-h-screen px-6 pt-4 bg-white w-full'>

                            <Topic loading={loading} setLoading={setLoading} newTopic={newTopic} setNewTopic={setNewTopic} />

                        </div>

                    </div>

                </div>
                <Footer />
            </div>
        </>
    )

}

export default Discussion