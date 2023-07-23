// import React, { useEffect, useState } from 'react';
// import Home from './pages/home/home'

// const App = () => {  
//   return (
//     <Home/>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Redirect, Switch } from 'react-router-dom';

import Home from './pages/home/home'
import Login from './pages/login/login'
import PostPage from './pages/postpage/postpage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/goodbye" element={<Home />} />
      <Route path="/post/:pid" element={<PostPage />} />
    </Routes>
  </Router>
  );
};

export default App;
