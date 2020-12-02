import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../userContext';

// User's Profile page
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
        <h4> Your mobile number or email is:</h4>
        <h2>{object.mobileOrEmail}</h2>
        <h4> Your fullname is: </h4> <h2>{object.fullname}</h2>
        <h4>Your username is: </h4> <h2>{object.username}</h2>
        <h6> Your password is: </h6> <h2>{object.password}</h2>
      </div>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default withRouter(UserProfile);
