//not implemented
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Login = (setLoggedIn) => {
  const [data, setData] = useState([]);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  
  const navigate = useNavigate();
  const handleUChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePChange = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    // axios.get(`${port}/api/login/${username}`)
    //   .then((response) => {
    //     setData(response.data);
    //     if(data.password == password){
    //         setLoggedIn(true)
    //     }
    //   })
    //   .catch((error) => console.error('Error fetching data:', error));
    // console.log(username + ": " + password)
    navigate('/home');
  }

  return (
    <div>
      <h1>Welcome to the Discussion Board</h1>
      <h2>Please login to continue</h2>
      <input
        onChangeText={handleUChange}
        
      />
      <input
        onChangeText={handlePChange}
        value={password}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

