import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserContext from '../userContext';

const UserProfile = (props) => {
  const handleSignOut = async (e) => {
    props.history.push('/sign-in');
  };

  const { uvalue, pvalue } = useContext(UserContext);
  const { userInfo } = useContext(UserContext);

  return (
    <div>
      <div>
        <h1>Hello {uvalue}</h1>
        <h3>Your username is: {uvalue}</h3>
        <h3>Your password is: {pvalue} </h3>
        <article>
          <h3>Here is your data:</h3>
          <p> {JSON.stringify(userInfo)}</p>
        </article>
      </div>

      <h1></h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default withRouter(UserProfile);
