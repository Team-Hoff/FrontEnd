import React from 'react';
import '../Styles.css';
import CommentForm from './CommentForm';
import ProfileIcon from './Profile-icon.png';

const Comment = ({ comment, replies, currentUserId, deleteComment, activeComment, setActiveComment, updateComment, addComment, parentId = null }) => {
    const fiveMinutes = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes
    const canReply = Boolean(currentUserId);
    const canEdit = currentUserId === comment.userId && !timePassed;
    const canDelete = currentUserId === comment.userId && !timePassed;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    const createdTime = new Date(comment.createdAt).toLocaleTimeString();
    const isReplying = activeComment && activeComment.type === 'replying' && activeComment.id === comment.id;
    const isEditing = activeComment && activeComment.type === 'editing' && activeComment.id === comment.id;
    const replyId = parentId ? parentId : comment.id

    return (
        <div className='comment'>
            <div className="comment-image-container">
                <img src={ProfileIcon} alt='icon' />
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">
                        {comment.username}
                    </div>
                    <div>{createdAt} {createdTime}</div>
                </div>
                {!isEditing && <div className="comment-text">{comment.body}</div>}
                {isEditing && (
                    <CommentForm submitLabel='Update' hasCancelButton initialText={comment.body} handleSubmit={(text) => updateComment(text, comment.id)} handleCancel={() => setActiveComment(null)} />
                )}
                <div className="comment-actions">
                    {canReply && <div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: 'replying' })}>Reply</div>}
                    {canEdit && <div className="comment-action" onClick={() => setActiveComment({ id: comment.id, type: 'editing' })}>Edit</div>}
                    {canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
                </div>
                <hr />
                {isReplying && (
                    <CommentForm submitLabel="Reply" handleSubmit={(text) => addComment(text, replyId)} />
                )}
                {replies.length > 0 && (
                    <div className="replies">
                        {replies.map(reply => (
                            <Comment key={reply.id} comment={reply} replies={[]} currentUserId={currentUserId} deleteComment={deleteComment} updateComment={updateComment} parentId={comment.id} addComment={addComment} activeComment={activeComment} setActiveComment={setActiveComment} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment