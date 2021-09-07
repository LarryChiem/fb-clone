import React from 'react';
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        //Sign in...
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);

            dispatch({
                type: actionTypes.SET_USER,
                user: user 
            });

            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                    alt="" 
                />
                <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt="" 
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
 