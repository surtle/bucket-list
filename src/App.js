import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MapContainer from './MapContainer';
import FlexView from 'react-flexview';


// ===================== FIREBASE SETUP ============================

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

// =================================================================

const mapStyles = {
  width: '100%',
  height: '100%'
};

function App() {
  
  return (
    <div className="App">
      <div class="header">
        <a href = "/" class="title">bucketlist</a>
      </div>


      <div class = "list" >
        <ul class = "menu">
            <li>Sign in</li>
            <li>About</li>
            <li>My Itinerary</li> 
        </ul>
      </div>
      
      <div>
        <MapContainer/>
      </div>
      
      

    </div>
  );
 
}



export default App