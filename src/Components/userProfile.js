import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../userContext';

const UserProfile = (props) => {
  const handleSignOut = async (e) => {
    props.history.push('/sign-in');
  };

  return (
    <div>
      <div>
        <h1>Hello</h1>
        <h3>Your username is: </h3>
        <h3>Your password is: </h3>
      </div>

      <h1></h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default withRouter(UserProfile);
