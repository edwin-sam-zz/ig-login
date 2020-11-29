import React, { useState } from 'react';
import whiteLogo from '../images/white-fb-logo2.png'
import appleLogo from '../images/download-apple.png'
import androidLogo from '../images/download-google.png'
import '../style.css';
import SignInPage from './signInPage';

const SignUpPage = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [fullnameActive, setFullnameActive] = useState(false);
    const [usernameActive, setUsernameActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const [mobileOrEmail, setMobileOrEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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

    const handleMobileChange = (text) => {
        setMobileOrEmail(text);

        if (text !== '') {
            setMobileActive(true);
        } else {
            setMobileActive(false);
        }
    }

    const handleFullnameChange = (text) => {
        setFullname(text);

        if (text !== '') {
            setFullnameActive(true);
        } else {
            setFullnameActive(false);
        }
    }

    const fbLink = 'https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26state%3D%257B%2522fbLoginKey%2522%253A%2522w2g5f9921a2a1no0pj01pwalhh1bswdwl15qbmv24wpa2j1hqd9ba%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%26scope%3Demail%26response_type%3Dcode%252Cgranted_scopes%26locale%3Den_US%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3965b22f-49ac-4f12-8c94-eb58f244e9ce%26shared_id%3DTODO_SHARED_ID%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%2522w2g5f9921a2a1no0pj01pwalhh1bswdwl15qbmv24wpa2j1hqd9ba%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252F%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0';
    return (
        <>
            <div className="signup">
                <h1>Instagram</h1>

                <p className="signuptext">
                    Sign up to see photos and videos from your friends.
                </p>
                <button href={fbLink} className="fb-btn"><img  className="fbImage" src={whiteLogo}></img>Log in with Facebook</button>
                <p className="has-separator2">Or</p>

                <input id="create-mobile-or-email" type="text" value={mobileOrEmail} onChange={(e) => handleMobileChange(e.target.value)} />
                <label id="mobileActive" className={mobileActive ? 'Active' : ''} htmlFor="mobile">Mobile Number or Email</label>

                <input id="create-fullname" type="text" value={fullname} onChange={(e) => handleFullnameChange(e.target.value)} />
                <label id="fullnameActive" className={fullnameActive ? 'Active' : ''} htmlFor="fullname">Full Name</label>

                <input id="create-username" type="text" value={username} onChange={(e) => handleUsernameChange(e.target.value)}/>
                <label id="usernameActive" className={usernameActive ? 'Active' : ''} htmlFor="username">Username</label>

                <input id="create-password" type="text" value={password} onChange={(e) => handlePasswordChange(e.target.value)}/>
                <label id="passwordActive" className={passwordActive ? 'Active' : ''} htmlFor="password">Password</label>

                <button className="fb-btn" disabled>Sign Up</button>

                <p id="terms-and-conditions">
                    By signing up, you agree to our <a href="https://help.instagram.com/581066165581870"><b>Terms</b></a>, <a href="https://help.instagram.com/519522125107875"><b>Data Policy</b></a>,
                     and <a href="https://help.instagram.com/1896641480634370?ref=ig"><b>Cookies Policy</b></a>
                </p>

                <div className="have-an-account">
                    <p>Have an account? <a href=" "><b>Log In</b></a></p>
                </div>

                <p id="get-the-app">
                    Get the app.
                </p>

               <div className="store">
                    <a className="apple-store" href="" ><img id="apple-image" src={appleLogo} type="img"></img></a> 
                    <a className="android-store" href="" ><img id="android-image" src={androidLogo} type="img"></img></a>
               </div>
                
            </div>
        </>
    );
}

export default SignUpPage;