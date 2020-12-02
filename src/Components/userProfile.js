import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../userContext';

const UserProfile = (props) => {
  const handleSignOut = async (e) => {
    props.history.push('/sign-in');
  };

  const { userInfo } = useContext(UserContext);

  const object = userInfo;

  return (
    <div>
      <div>
        <h1>Hello {object.username}</h1>
        <h3>Your mobile number or email is: {object.mobileOrEmail}</h3>
        <h3>Your fullname is: {object.fullname}</h3>
        <h3>Your username is: {object.username}</h3>
        <h3>Your password is: {object.password} </h3>
      </div>

      <h1></h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default withRouter(UserProfile);
