import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/facebook-logo.png';
import phonesLogo from '../images/phones-image.png';
import appleLogo from '../images/download-apple.png';
import androidLogo from '../images/download-google.png';
import { withRouter } from 'react-router-dom';
import '../style.css';
import UserContext from '../userContext';
// import User from '../../model/user';

const SignInPage = (props) => {
  const [isUsernameActive, setUsernameActive] = useState(false);
  const [isPasswordActive, setPasswordActive] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const { setuValue } = useContext(UserContext);
  const { setpValue } = useContext(UserContext);
  const { userInfo, setUserInfo } = useContext(UserContext);

  const { randomPath } = useContext(UserContext);

  const handleUsernameChange = (text) => {
    setUsername(text);

    if (text !== '') {
      setUsernameActive(true);
    } else {
      setUsernameActive(false);
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);

    if (text !== '') {
      setPasswordActive(true);
    } else {
      setPasswordActive(false);
    }
  };

  const fbLink =
    'https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%252211w1izj65x04l1p1cmwc7v7eyu11ivxywumq70ozwj5te2ok57g%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D27f3ea92-013c-4289-9c6e-cd1d5bc539e7%26shared_id%3DTODO_SHARED_ID%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%252211w1izj65x04l1p1cmwc7v7eyu11ivxywumq70ozwj5te2ok57g%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0';

  const isFormValid = () => {
    if (username.length > 6 && password.length > 6) {
      return username && password;
    }
  };

  const handleLogin = async (e) => {
    // e.preventDefault();
    try {
      const success = await fetch('http://localhost:8000/login', {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const parsedSuccess = await success.json();
      console.log(parsedSuccess);
      if (parsedSuccess) {
        setSuccess(true);
        setUserInfo(parsedSuccess);
      }

      console.log('uhmmmmmmm' + JSON.stringify(userInfo));
    } catch (e) {
      console.log(e);
    }

    if (success === true) {
      props.history.push(randomPath);
    } else if (success === false) {
      console.log('Wrong Credentials');
      return;
    }
  };

  return (
    <>
      <div className='login'>
        <h1>Instagram</h1>

        <div>
          <input
            type='username'
            alt='text'
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
          />
          <label
            id='usernameActive'
            className={isUsernameActive ? 'Active' : ''}
            htmlFor='username'
          >
            Username
          </label>

          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <label
            id='passwordActive'
            className={isPasswordActive ? 'Active' : ''}
            htmlFor='password'
          >
            Password
          </label>

          <button
            id='btn'
            disabled={!isFormValid()}
            onClick={() => {
              handleLogin();
              setuValue(username);
              setpValue(password);
            }}
          >
            Log In
          </button>

          <p className='has-separator'>Or</p>
          <a href={fbLink} className='facebook-login'>
            <img prop='' className='fbImage' src={logo}></img>Log in with
            Facebook
          </a>
          <p className='forgotPassword'>Forgot Password?</p>
        </div>

        <div className='phones-image-signIn'>
          <img
            prop=''
            className='phones-signIn'
            src={phonesLogo}
            type='image'
            alt=''
          ></img>
        </div>

        <div className='need-an-account'>
          <p>
            Dont have an account?
            <Link to='/'>
              {' '}
              <b>Sign Up</b>{' '}
            </Link>
          </p>
        </div>

        <p id='get-the-app-sn'>Get the app.</p>

        <div className='store'>
          <a
            className='apple-store'
            href='https://apps.apple.com/app/instagram/id389801252?vt=lo'
            target='_blank'
            rel='noreferrer'
          >
            <img prop='' id='apple-image-sn' src={appleLogo} type='img'></img>
          </a>
          <a
            className='android-store'
            href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3D604319C2-32AB-46DC-AC79-E92B13034E75%26utm_content%3Dlo%26utm_medium%3Dbadge'
            target='_blank'
            rel='noreferrer'
          >
            <img
              prop=''
              id='android-image-sn'
              src={androidLogo}
              type='img'
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default withRouter(SignInPage);
