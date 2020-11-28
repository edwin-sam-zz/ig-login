import React, { useState } from 'react';
import whiteLogo from '../images/white-fb-logo2.png'
import '../style.css';
import SignInPage from './signInPage';

const SignUpPage = () => {

    const [mobileActive, setMobileActive] = useState(false);
    const [fullnamenameActive, setFullnameActive] = useState(false);
    const [usernameActive, setUsernameActive] = useState(false);
    const [passwordActive, setPasswordActive] = useState(false);

    const [mobileOrEmail, setMobileOrEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')



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

                <input id="create-mobile-or-email" type="text"/>
                <label className="mobile-or-email" htmlFor="username">Mobile Number or Email</label>
                <input id="create-fullname" type="text"/>
                <label className="fullname" htmlFor="username">Full Name</label>
                <input id="create-username" type="text"/>
                <label className="username" htmlFor="username">Username</label>
                <input id="create-password" type="text"/>
                <label className="password" htmlFor="username">Password</label>

                

            </div>
        </>
    );
}

export default SignUpPage;