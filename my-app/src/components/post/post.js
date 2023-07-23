import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reply from '../reply/reply'
import { useNavigate } from 'react-router-dom';

const Post = (data) => {
//   const [data, setData] = useState([]);
//   const port = 'http://localhost:5000'
const [replies, setReplies] = useState([]);
const port = 'http://localhost:5000'

const navigate = useNavigate();
const postClick = () => {
  console.log("HERE")
  navigate(`/post/${data.data.pid}`);
}

useEffect(() => {
  axios.get(`${port}/api/replies/${data.data.pid}`)
  
    .then((response) => {
      setReplies(response.data);
    })
    .catch((error) => console.error('Error fetching data:', error));
}, []);


  return (
    <div onClick={() => postClick()}>
      <h1>{data.data.title}</h1>
      <text>{data.data.body}</text>
      <div>
      {replies.map((item) => (
        <Reply key={item.rid} data={item}/>
    ))}
    </div>
    </div>
  );
};

export default Post;

