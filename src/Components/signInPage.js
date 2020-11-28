import React, { useState } from 'react';
import logo from '../images/facebook-logo.png'
import '../style.css';


const SignInPage = () => {

  const [isUsernameActive, setUsernameActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text) => {
    setUsername(text);

  if (text !== '') {
    setUsernameActive(true);
  } else {
    setUsernameActive(false);
  }
}

  const handlePasswordChange = (text) => {
    setPassword(text);

  if (text !== '') {
    setPasswordActive(true);
  } else {
    setPasswordActive(false);
  }
}

const fbLink = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252211w1izj65x04l1p1cmwc7v7eyu11ivxywumq70ozwj5te2ok57g%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D27f3ea92-013c-4289-9c6e-cd1d5bc539e7%26shared_id%3DTODO_SHARED_ID%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252211w1izj65x04l1p1cmwc7v7eyu11ivxywumq70ozwj5te2ok57g%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0';

// const disableButton = () => {

// }

  return (
    <>
      <div className="login">
          <h1>Instagram</h1>

          <input type="username" type="text" value={username} onChange={(e) => handleUsernameChange(e.target.value)} />
          <label className={isUsernameActive ? 'Active' : ''}htmlFor="username">Phone number, username, or email</label>

          <input id="password" type="text" value={password} onChange={(e) => handlePasswordChange(e.target.value)}/>
          <label className={isPasswordActive ? 'Active' : ''} htmlFor="password">Password</label>

          <button id="btn" disabled>Log In</button>
          <p className="has-separator">Or</p>
          <a href={fbLink} className="facebook-login"><img  className="fbImage" src={logo}></img>Log in with Facebook</a>
          <p className="forgotPassword">Forgot Password?</p>  
      </div>
       
    </>
  );
}

export default SignInPage;