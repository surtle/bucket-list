import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <a href = "/" class="title">bucketlist</a>
      </div>

      <div class="map">
        <p> map placeholder </p>
      </div>
    </div>
  );
}


const mapStyles = {
  width: '100%',
  height: '100%'
};

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

