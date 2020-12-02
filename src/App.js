import React, { useContext, UseContext, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SignInPage from './Components/signInPage';
import SignUpPage from './Components/signUpPage';
import Footer from './Components/footer';
import UserProfile from './Components/userProfile';
import UserContext from './userContext';

const App = () => {
  const randomNumber = () => {};
  // const [user, setUser] = useState(null);

  // const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Router>
      <Switch>
        {/* Path to Sign In Page  */}
        <Route exact path='/sign-in'>
          <SignInPage />
        </Route>

        {/* Path to users Profile */}

        <Route exact path='/userProfile'>
          <UserProfile />
        </Route>

        {/* Path to sign up page */}
        <Route exact path='/'>
          <SignUpPage />
        </Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
