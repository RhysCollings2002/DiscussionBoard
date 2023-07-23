import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../../components/post/post.js'


const Home = () => {
  const [data, setData] = useState([]);
  const port = 'http://localhost:5000'

  useEffect(() => {
    axios.get(`${port}/api/posts`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  

  return (
    <div>
      <h1>React App with MySQL Data</h1>
      <ul>
        {data.map((item) => (
          <Post key={item.pid} data={item}/>
        ))}
      </ul>
    </div>
  );
};

export default Home;

