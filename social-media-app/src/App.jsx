
import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import './App.css'; // Ensure this CSS file is correctly imported

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const toggleLike = (index) => {
    const newPosts = posts.map((post, i) => {
      if (i === index) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(newPosts);
  };

  const addComment = (index, comment) => {
    const newPosts = posts.map((post, i) => {
      if (i === index) {
        return { ...post, comments: [...post.comments, comment] };
      }
      return post;
    });
    setPosts(newPosts);
  };

  return (
    <div className="container">
      <h1>Fakebook</h1>
      <CreatePostForm addPost={addPost} />
      <Feed posts={posts} toggleLike={toggleLike} addComment={addComment} />
    </div>
  );
}

export default App;