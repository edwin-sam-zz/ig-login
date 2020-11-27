import { Button } from '@material-ui/core';
import React from 'react';
import './style.css';


const App = () => {
  return (
    <>
      <div className="login">
          <h1>Instagram</h1>
          <input id="username" type="text" placeholder="Phone number, username, or email" />
          <input id="password" type="text" placeholder="Password" />
          <button>Log In</button>
      </div>
       
    </>
  );
}

export default App;
