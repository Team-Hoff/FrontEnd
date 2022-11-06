import React, { useState, useEffect } from 'react';
import '../Styles.css';
import Comment from './Comment';
import Axios from 'axios';
import axios from '../../utils/axios';
import { useAuth } from "../../hooks/useAuth";
import { TopicCards } from '../../Programme Page/styledComponents';
import CommentForm from './CommentForm';
import { useParams } from 'react-router-dom';


const Comments = ({ currentUserId, loading, setLoading }) => {
    const { user } = useAuth();
    const { username, id } = user;
    const [comments, setcomments] = useState([]);
    const [Title, setTitle] = useState([])
    const [newTopic, setnewTopic] = useState(false)
    const [activeComments, setactiveComments] = useState(null);
    const rootComments = comments.filter(comment => comment.parentId === 0);
    const url = 'https://api.npoint.io/898023a9b97e28317456';

    const { idm } = useParams()

    const getReplies = commendId => {
        return comments.filter(comment => comment.parentId === commendId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    // const createComment = async (text, parentId = null) => {
    //     return {
    //         id: Math.random().toString(36).substr(2, 9),
    //         body: text,
    //         parentId,
    //         userId: id,
    //         username: username,
    //         createdAt: new Date().toISOString(),
    //     };

    // };

    // const updateComment = async (text) => {
    //     return { text };
    // };

    // const deleteComment = async () => {
    //     return {};
    // };

    const addComment = (text, parentId = null) => {
        axios.post(`/forum/reply/${idm}/${username}/${new Date().toISOString()}/${parentId}/${id}`, {
            comments: text
        })
            .then(res => {
                axios.get(`/forum/TopicComments/${idm}`)
                    .then((resp) => {
                        setTitle(resp.data[0])
                        setcomments(resp.data[1])
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
        setactiveComments(null)
        setnewTopic(false)
    }

    const deleteComments = (commentId) => {
        if (window.confirm('Are you sure that you want to remove comment?')) {
            axios.post(`/forum/delete/${commentId}`)
                .then(() => {
                    axios.get(`/forum/TopicComments/${idm}`)
                        .then((resp) => {
                            setTitle(resp.data[0])
                            setcomments(resp.data[1])
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const updatecomment = (text, commentId) => {
        axios.post(`/forum/edit/${commentId}`, {
            comments: text
        })
            .then(() => {
                axios.get(`/forum/TopicComments/${idm}`)
                    .then((resp) => {
                        setTitle(resp.data[0])
                        setcomments(resp.data[1])
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
            .catch((err) => {
                console.log(err);
            })
        setactiveComments(null)

    }


    useEffect(() => {
        axios.get(`/forum/TopicComments/${idm}`)
            .then((res) => {
                setTitle(res.data[0])
                setcomments(res.data[1])
                setLoading(false);

            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments])

    return (
        <TopicCards>
            {
                Title.map((title) => (
                    <>
                        <h1 className='text-left'>{title.Topic}</h1>
                        <p>{title.summary}</p>
                        <div className='flex flex-row justify-between'>
                            <p>Posted by {title.author}</p>
                            <p>{new Date(title.createdAt).toLocaleDateString()} {new Date(title.createdAt).toLocaleTimeString()}</p>
                        </div>
                        <p><button className="comment-action text-sm" onClick={() => setnewTopic(true)}>Reply</button></p>
                        {
                            newTopic && <CommentForm submitLabel='Write' handleSubmit={addComment} handleCancel={() => setnewTopic(false)} />
                        }
                    </>
                ))
            }


            <hr />

            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} currentUserId={currentUserId} deleteComment={deleteComments} activeComment={activeComments} setActiveComment={setactiveComments} addComment={addComment} updateComment={updatecomment} />
                ))}
            </div>
        </TopicCards>
    )
}

export default Comments