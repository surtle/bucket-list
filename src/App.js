import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import MapContainer from "./MapContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'



// ===================== FIREBASE & AUTH SETUP ============================

var firebase = require("firebase/app");

require("firebase/auth");
require("firebase/database");

const firebaseConfig = {
  apiKey: "AIzaSyAj52JUY4jm-SQU5td6zPyiBNWyX0x-5l4",
  authDomain: "bucketlist-c95a0.firebaseapp.com",
  databaseURL: "https://bucketlist-c95a0.firebaseio.com",
  projectId: "bucketlist-c95a0",
  storageBucket: "bucketlist-c95a0.appspot.com",
  messagingSenderId: "300377193585",
  appId: "1:300377193585:web:b2d856768f2dc4f6d36fd0",
  measurementId: "G-GX1SX7KKYV"
};

firebase.initializeApp(firebaseConfig);

// get reference to database service
var database = firebase.database();

// create instance of Google provider object 
var provider = new firebase.auth.GoogleAuthProvider();



// ===================== LOG IN BUTTON CLASS ===============================
var success = 0;
class LogInButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {signedIn : false};

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  async signIn() {
    var success = 0;
    await firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...

      success = 1;
      console.log("state set to true");
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...

      console.log("sign in error");
      console.log(errorMessage);
    });

    if(success === 1) {
      this.setState( state => ({
        signedIn : true
      }));
      console.log("state set to true");
    } else {
      this.setState( state => ({
        signedIn : false
      }));
      console.log("state set to false");
    }
  }

  async signOut() {
    var success = 0;
    await firebase.auth().signOut().then(function() {
      // Sign-out successful.
      success = 1;
    }).catch(function(error) {
      // An error happened.
      success = 0;
    });

    if(success === 1) {
      this.setState( state => ({
        signedIn : false
      }));
    } else {
      this.setState( state => ({
        signedIn : true
      }));
    }
  }

  render() {
    console.log("rendering again...");
      if(this.state.signedIn) {
        console.log("rendering Sign Out");
        return (<a onClick={this.signOut} href = "#"> Sign Out </a>);
      } else {
        console.log("rendering Sign In");
        return (<a onClick={this.signIn} href = "#"> Sign In </a>);
      }
  }
}

// =================================================================

function App() {
  let dropDownStyle = {
    color: 'white'
  };
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />

      <div class="header">
        <a href="/" class="title">
          bucketlist
        </a>
        <div class = "dropdown"> 
        <DropdownButton class = "dropdown" style = {dropDownStyle} id="dropdown-basic-button" title="Menu">
          <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
          <Dropdown.Item href="#/action-2">About</Dropdown.Item>
          <Dropdown.Item href="#/action-3">My Itinerary</Dropdown.Item>
        </DropdownButton>
        </div>
      </div>
      <div class="column-layout">
        <div class="list">
          <div class="list-inner">
            <span class="menu"> <LogInButton/> </span>
            <span class="menu"> About </span>
            <span class="menu"> Itinerary </span>
          </div>
          <div class="intro">
            <h3> How to Start</h3>
            <p> This is a guide of how to start using this web application</p>
          </div>
        </div>
        <div class="map">
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
