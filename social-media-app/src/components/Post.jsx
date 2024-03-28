

import React, { useState } from 'react';

import Comment from './components/Comment';

function Post(props){

  const [likes, setLikes] = useState(0);

  function handleLike(){
    setLikes(likes + 1);
  }
  
  return(
    <div>
      <h3>{props.content}</h3>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
      <p>Comments:</p>
      <Comment content="This is a test comment!" />
      <Comment content="This is another test comment!" />
      <Comment content="This is yet another test comment!" />
    </div>
  )
}
export default Post