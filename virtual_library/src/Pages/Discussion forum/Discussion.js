import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import Sidebar from './Sidebar';
import Comments from './Comments/Comments';
import { useAuth } from '../hooks/useAuth';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import GoBack from '../../Components/GoBack/GoBack';


const Discussion = () => {
    const [newTopic, setNewTopic] = useState(false)
    const { user } = useAuth();
    const { id } = user;
    const [loading, setLoading] = useState(false);

    if (loading) {
        return (
            <div>
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
            </div>
        )
    }

    return (

        <>
            <Navbar />
            <div className='w-full flex flex-col md:flex-row h-max bg-gray-200'>
                <Sidebar />
                <div style={{ marginTop: '25px', width: '60px' }}><GoBack /></div>
                <div className='w-full h-max flex flex-col gap-10 pt-10 px-5 pb-10 '>
                    <span className='text-right'>
                        <button onClick={() => setNewTopic(newTopic => !newTopic)} className="w-[300px] bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            <AiOutlinePlus size={20} />    Start a new Topic
                        </button>
                    </span>
                    <div className='h-full px-6 pt-4 bg-white w-full'>

                        <Comments currentUserId={id} newTopic={newTopic} setNewTopic={setNewTopic} setLoading={setLoading} loading={loading} />

                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Discussion