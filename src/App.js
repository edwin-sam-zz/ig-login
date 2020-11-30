import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import SignInPage from './Components/signInPage';
import SignUpPage from './Components/signUpPage';



const App = () => {
 
  return (
    <Router>
      <Switch>
        {/* Path to Sign In Page  */}
        <Route path="/sign-in">
          <SignInPage />
        </Route>

        {/* Path to sign up page */}
        <Route path="/">
          <SignUpPage />
        </Route>
        
      </Switch>

    </Router>
  )
}

export default App;
