
import React from 'react';
import SimplePost from './SimplePost';

function Feed({ posts, toggleLike, addComment }) {
  return (
    <div>
      {posts.map((post, index) => (
        <SimplePost
          key={index}
          index={index}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
          toggleLike={toggleLike}
          addComment={addComment}
        />
      ))}
    </div>
  );
}

export default Feed;