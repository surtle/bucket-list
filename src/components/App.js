import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'assets/App.scss';
import Sidebar from 'components/Sidebar.js';
import UpcomingTrips from 'components/UpcomingTrips.js';
import PlacesToGo from 'components/PlacesToGo.js';
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

function App() {
  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <div className="widget">
          <UpcomingTrips />
        </div>
        <div className="widget">
          <PlacesToGo />
        </div>
      </div>
    </div>
  );
 
}

export default App