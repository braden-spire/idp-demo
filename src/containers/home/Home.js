import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import logo from '../../logo.svg';
import './Home.css';

import firebase from "firebase/app";
import "firebase/auth";


const Home = (props) => {
  //const { authState } = useOktaAuth();
  const history = useHistory();
  
  useEffect(() => { // Similar to componentDidMount and componentDidUpdate:

    var firebaseConfig = {
      apiKey: "AIzaSyBCO5vnt6fWbD710DhnG-1CYcZUXnK0Ycg",
      authDomain: "big-cabinet-135722.firebaseapp.com",
      databaseURL: "https://big-cabinet-135722.firebaseio.com",
      projectId: "big-cabinet-135722",
      storageBucket: "big-cabinet-135722.appspot.com",
      //messagingSenderId: "65211879809",
      appId: "1:65211879909:web:3ae38ef1cdcb2e01fe5f0c",
      //measurementId: "G-8GSGZQ44ST"  
    };

    if (!firebase.apps.length) { // Initialize Firebase (make sure to only initialize it once per session)
      firebase.initializeApp(firebaseConfig); 
    }

    const provider = new firebase.auth.SAMLAuthProvider('saml.test-idp');

    // https://cloud.google.com/identity-platform/docs/web/saml
    // https://firebase.google.com/docs/web/setup#node.js-apps
    firebase.auth().signInWithPopup(provider) // check to see if user has auth credentials
      .then((result) => {
        console.log(result)
        // User is signed in.
        // Identity provider data available in result.additionalUserInfo.profile,
        // or from the user's ID token obtained from result.user.getIdToken()
        // as an object in the firebase.sign_in_attributes custom claim
        // This is also available from result.user.getIdTokenResult()
        // idTokenResult.claims.firebase.sign_in_attributes.
      })
      .catch((error) => {
        // Handle error.
        console.log('error')
        console.log(error)
      });
  })

  const logout = () => {
    history.push("/logout");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EnergyCo SSO Demo 
        </p>
      </header>
    </div>
  );

}

export default Home;

/* Docs
 *
 * Logout
 * https://developer.okta.com/docs/guides/sign-users-out/react/before-you-begin/
 * <button className="App-link" onClick={logout}>
      Logout
    </button>
 */
