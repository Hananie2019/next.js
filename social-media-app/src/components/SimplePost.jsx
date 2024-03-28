

import React, { useState } from 'react';

function SimplePost({ index, content, likes, comments, toggleLike, addComment }) {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment(index, newComment);
    setNewComment('');
  };

  return (
    <div className="post">
      <p>{content}</p>
      <div>
        <button onClick={() => toggleLike(index)}>Like</button>
        <span>{likes} Likes</span>
      </div>
      <div>
        <h4>Comments:</h4>
        {comments.map((comment, i) => (
          <p key={i}>{comment}</p>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default SimplePost;