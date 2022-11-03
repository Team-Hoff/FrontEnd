import React, { useState, useEffect } from 'react';
import '../Styles.css';
import Comment from './Comment';
import CommentForm from './CommentForm';
import Axios from 'axios';
import { useAuth } from "../../hooks/useAuth";
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './firebase';

const Comments = ({ currentUserId, setNewTopic, newTopic, loading, setLoading }) => {
    const { user } = useAuth();
    const { username, id } = user;
    const [comments, setcomments] = useState([]);
    const [activeComments, setactiveComments] = useState(null);
    const rootComments = comments.filter(comment => comment.parentId === null);
    const url = 'https://api.npoint.io/898023a9b97e28317456';


    const getReplies = commendId => {
        return comments.filter(comment => comment.parentId === commendId).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    const createComment = async (text, parentId = null) => {
        return {
            id: Math.random().toString(36).substr(2, 9),
            body: text,
            parentId,
            userId: id,
            username: username,
            createdAt: new Date().toISOString(),
        };

    };

    const updateComment = async (text) => {
        return { text };
    };

    const deleteComment = async () => {
        return {};
    };

    const addComment = (text, parentId) => {
        createComment(text, parentId)
            .then(async (comment) => {
                await Axios.post(url, [...comments, comment], {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(res => {
                        Axios.get(url)
                            .then((resp) => {
                                setcomments(resp.data)
                            })
                            .catch((err) => {
                                // console.log(err);
                            })
                    })
                    .catch(err => {
                        // console.log(err);
                    })
                setactiveComments(null)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const deleteComments = (commentId) => {
        if (window.confirm('Are you sure that you want to remove comment?')) {
            deleteComment(commentId)
                .then(() => {
                    const updatedcomments = comments.filter(
                        (comment) => comment.id !== commentId
                    );
                    Axios.post(url, updatedcomments)
                        .then((res) => {
                            // console.log(res);
                        })
                        .catch((err) => {
                            // console.log(err);
                        })
                    setcomments(updatedcomments)
                })
        }
    }

    const updatecomment = (text, commentId) => {
        updateComment(text, commentId)
            .then(() => {
                const updatedcomments = comments.map(comment => {
                    if (comment.id === commentId) {
                        return { ...comment, body: text }
                    }
                    return comment
                })
                Axios.post(url, updatedcomments)
                    .then((res) => {
                        // console.log(res);
                    })
                    .catch((err) => {
                        // console.log(err);
                    })
                setcomments(updatedcomments)
                setactiveComments(null)
            })
    }


    useEffect(() => {
        Axios.get(url,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((res) => {
                setcomments(res.data)
                setLoading(false);

            })
            .catch((err) => {
                console.log(err);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    Axios.get(url,
        {
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((res) => {
            setcomments(res.data)
            // setLoading(false);

        })
        .catch((err) => {
            console.log(err);
        })


    if (newTopic) {
        return (
            <>

                <CommentForm submitLabel='Write' handleSubmit={addComment} />
                {/* <div className="comments-container">
                    {rootComments.map((rootComment) => (
                        <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} currentUserId={currentUserId} deleteComment={deleteComments} activeComment={activeComments} setActiveComment={setactiveComments} addComment={addComment} updateComment={updatecomment} />
                    ))}
                </div> */}
            </>
        )
    }


    return (
        <div className='comments'>
            {comments.length !== 0 ?
                <h3 className='comments-title'>{comments[0].title}</h3>
                : ''
            }
            <hr />

            <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment key={rootComment.id} comment={rootComment} replies={getReplies(rootComment.id)} currentUserId={currentUserId} deleteComment={deleteComments} activeComment={activeComments} setActiveComment={setactiveComments} addComment={addComment} updateComment={updatecomment} />
                ))}
            </div>
        </div>
    )
}

export default Comments