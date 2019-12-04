import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import {useState,useEffect} from "react";
import * as firebase from "firebase/app";
import "firebase/auth";

import Header from './components/Header/index';
import Login from './pages/Login/index'
import UserProfile from './pages/UserProfile/index'
import Signup from './pages/Signup/index'

var provider = new firebase.auth.GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyCm6-O_Gv_gzXSPMndneMYspsaY13JAd-o",
  authDomain: "exercise-five.firebaseapp.com",
  databaseURL: "https://exercise-five.firebaseio.com",
  projectId: "exercise-five",
  storageBucket: "exercise-five.appspot.com",
  messagingSenderId: "498695920220",
  appId: "1:498695920220:web:0e3f58432731a61fa96499",
  measurementId: "G-Y55C120YPY"
};

const uiConfig = ({
  signInSuccessUrl: '/',
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
})

function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const [user,setUser]=useState({});
  const [error,setError]=useState("");

  useEffect(()=>{
    if(!firebase.apps.length)
      firebase.initializeApp(firebaseConfig);

    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
  },[firebaseConfig])

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
      }
    });
  },[]);

  function signUpFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.signupEmail.value;
    let password = e.currentTarget.signupPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response)=>{
        console.log(response);
        setLoggedIn(true);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        setError("errorMessage");
        console.log(errorCode, errorMessage);
    });
  }

  function loginFunction(e) {
    e.preventDefault();
    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        setLoggedIn(true);
      })
      .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      setError("errorMessage");
      console.log(errorCode, errorMessage);
    });
  }

  function loginWithGoogle(){
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      setUser(user);
      setLoggedIn(true);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      setError("errorMessage");
    });
  }

  function logoutFunction() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setLoggedIn(false);
        setUser({});
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      setError("errorMessage");
      console.log(errorCode, errorMessage);
    });
  }

  return (
    <div className="App" >
      <Header loggedin={loggedIn} logoutFunction={logoutFunction}/>
      <Router>
        {<Route exact path='/' >
          {loggedIn? <UserProfile user={user} />:<Redirect to="/login" />}
        </Route>}
        <Route exact path='/login'>
          {loggedIn ? <Redirect to='/' /> : <Login loginFunction={loginFunction} loginWithGoogle={loginWithGoogle}/>}
        </Route>
        <Route exact path='/sign-up'>
          {loggedIn ? <Redirect to="/" /> : <Signup signUpFunction={signUpFunction} signupWithGoolge={loginWithGoogle}/>}
        </Route>
      </Router>
    </div>
  );
}

export default App;
