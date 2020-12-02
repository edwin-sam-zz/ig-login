import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignInPage from './Components/signInPage';
import SignUpPage from './Components/signUpPage';
import Footer from './Components/footer';
import UserProfile from './Components/userProfile';
import UserContext from './userContext';

const App = () => {
  const [uvalue, setuValue] = useState(null);
  const [pvalue, setpValue] = useState(null);

  const randomNumber = () => {
    let randomNums = Math.floor(Math.random() * 9999 + 1);
    return randomNums;
  };

  const userPath = '/' + randomNumber + 'userProfile';

  const [randomPath, setRandomPath] = useState(userPath);
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Router>
      <UserContext.Provider
        value={{
          uvalue,
          setuValue,
          pvalue,
          setpValue,
          randomPath,
          setRandomPath,
          userInfo,
          setUserInfo,
        }}
      >
        <Switch>
          {/* Path to Sign In Page  */}
          <Route exact path='/sign-in'>
            <SignInPage />
          </Route>

          {/* Path to users Profile */}

          <Route exact path={randomPath}>
            <UserProfile />
          </Route>

          {/* Path to sign up page */}
          <Route exact path='/'>
            <SignUpPage />
          </Route>
        </Switch>
      </UserContext.Provider>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
