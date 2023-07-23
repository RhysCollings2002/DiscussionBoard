import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Reply from '../../components/reply/reply'
import { useNavigate, useParams } from 'react-router-dom';

const PostPage = () => {
    const { pid } = useParams(); 
//   const [data, setData] = useState([]);
//   const port = 'http://localhost:5000'
const [replies, setReplies] = useState([]);
const [post, setPost] = useState([]);
const port = 'http://localhost:5000'

const navigate = useNavigate();
// const postClick = () => {
  
//   navigate(`/post-${pid}`);
// }

useEffect(() => {
  axios.get(`${port}/api/replies/${pid}`)
    .then((response) => {
      setReplies(response.data);
    })
    .catch((error) => console.error('Error fetching data:', error));
    axios.get(`${port}/api/posts/${pid}`)
    .then((response) => {
      setPost(response.data);
    })
    .catch((error) => console.error('Error fetching data:', error));
    console.log(post)
}, []);


  return (
    <div>
      <h1>{post.title}</h1>
      <text>{post.body}</text>
      <div>
      {replies.map((item) => (
        <Reply key={item.rid} data={item}/>
    ))}
    </div>
    </div>
  );
};

export default PostPage;

