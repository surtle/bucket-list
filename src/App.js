import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import MapContainer from './MapContainer';
import FlexView from 'react-flexview';

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