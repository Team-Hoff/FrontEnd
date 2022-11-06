import React, { useState, useEffect, useRef } from 'react';
import { TopicCards } from '../../Programme Page/styledComponents';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import axios from '../../utils/axios';

const Topic = ({ loading, setLoading, newTopic, setNewTopic }) => {
    const Data = JSON.parse(localStorage.getItem('Topic'));
    const [topic, settopic] = useState([])
    const [noTopic, setnoTopic] = useState(false)
    const [title, settitle] = useState('')
    const { user } = useAuth();
    const { id, username } = user;
    const [text, settext] = useState('');
    const isTextareaDisable = text.length === 0 || title.length === 0;


    const createComment = async (text, title) => {
        return {
            Topic: title,
            author: username,
            createdAt: new Date().toISOString(),
            summary: text,
            topicID: Math.random().toString(36).substr(2, 9),
            userID: id,
        };

    };

    const addComment = (text, title) => {
        createComment(text, title)
            .then((comment) => {
                axios.post(`/forum/createTopic/${Math.random().toString(36).substr(2, 9)}/${username}/${new Date().toISOString()}/${id}`, {
                    Topic: title,
                    summary: text
                })
                    .then(res => {

                    })
                    .catch(err => {
                        console.log(err);
                    })
                // settopic([...topic, comment])
                setNewTopic(false)
            })


    }


    useEffect(() => {
        axios.get("/forum/TopicList")
            .then((res) => {
                if (Data === null) {
                    settopic(res.data)
                    setnoTopic(false)
                }
                else {
                    setnoTopic(false)
                    settopic(Data)
                }
                if (Data !== null) {
                    Data.length === 0 ? setnoTopic(true) : setnoTopic(false)
                }
                setLoading(false);

            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    })


    const onSubmit = (event) => {
        event.preventDefault();
        addComment(text, title)
        settext('')
        settitle('')
    }

    let menuRef = useRef();
    useEffect(() => {
        if (newTopic) {
            let handler = (e) => {
                if (!menuRef.current.contains(e.target)) {
                    setNewTopic(false)
                }
            }
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler)
            }
        }
    })

    if (newTopic) {
        document.body.style.overflow = 'hidden'
    }
    else {
        document.body.style.overflow = 'visible'
    }

    return (
        <div>

            {
                newTopic && (
                    <div className='form-container'>
                        <form ref={menuRef} style={{ border: '1px solid black', padding: '10px', marginBottom: '30px', borderRadius: '15px', backgroundColor: 'white' }} onSubmit={onSubmit}>
                            <div>Title</div>
                            <input style={{ border: '1px solid black', padding: '5px', borderRadius: '5px' }} type="text" value={title} onChange={(e) => { settitle(e.target.value) }} />
                            <div>Summary</div>
                            <textarea className='comment-form-textarea' value={text} onChange={(e) => settext(e.target.value)} />
                            <button className='comment-form-button' disabled={isTextareaDisable}>Post</button>
                            <button type='button' className='comment-form-button comment-form-cancel-button' onClick={() => setNewTopic(false)}>Cancel</button>
                        </form>
                    </div>
                )

            }

            {
                noTopic ? (
                    <div className='justify-center text-center'>
                        <h1 className='uppercase'>The discussion topic does not exist, please start a new topic</h1>
                    </div>
                ) : (

                    topic.map((a) => {

                        return (
                            <>
                                <TopicCards key={a.topicID}>
                                    <h1 className='text-left'>{a.Topic}</h1>

                                    <p>{a.summary}</p>
                                    <div className='flex flex-row justify-between'>
                                        <p>Posted by {a.author}</p>
                                        <p>{new Date(a.createdAt).toLocaleDateString()} {new Date(a.createdAt).toLocaleTimeString()}</p>
                                    </div>
                                    <Link to={`/discussion/${a.topicID}`} className='no-underline w-32'>
                                        View Replies
                                    </Link>
                                </TopicCards>
                            </>
                        )

                    })

                )
            }



        </div >
    )

}

export default Topic