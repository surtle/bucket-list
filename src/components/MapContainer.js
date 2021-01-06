import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import "assets/App.scss";
import CurrentLocation from "components/Map";

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
          zoom={14}
          style={mapStyles}
        >
          <Marker onClick={this.onMarkerClick} name={"current location"} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
          
        </CurrentLocation>

      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCVCnlvTmnjOYLcbHE6jKnPLq9hb1UtThY"
})(MapContainer);
