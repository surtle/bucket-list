import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';


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

      <div class="map">
        <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
      </div>
    </div>
  );
}


export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCVCnlvTmnjOYLcbHE6jKnPLq9hb1UtThY'
})(MapContainer);

