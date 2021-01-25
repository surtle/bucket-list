import React, { Component } from "react";
import "assets/App.scss";
import Searchbox from "components/Searchbox";
import { isEmpty } from 'lodash';

// components:
import Marker from 'components/Marker';

// examples:
import GoogleMap from 'components/GoogleMap';

const defaultProps = {
    defaultCenter: { lat: 34.0522, lng: -118.2437 }
}

// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();

    places.forEach((place) => {
        bounds.extend(new maps.LatLng(
            place.geometry.location.lat,
            place.geometry.location.lng,
        ));
    });
    return bounds;
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
        maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
        });
    });
};

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addPlaceCallback: this.props.addPlaceCallback,
            center: defaultProps.defaultCenter,
            currentLocation: defaultProps.defaultCenter,
            mapsApiLoaded: false,
            mapInstance: null,
            mapsapi: null,
        };
    }

    apiLoaded = (map, maps) => {
        this.setState({
            mapsApiLoaded: true,
            mapInstance: map,
            mapsapi: maps,
        });

        if (this.state.mapsApiLoaded) {
            console.log("api loaded");
        }
    }

    onPlacesChanged = (newPlace) => {
        this.setState({
            center: {
                lat: newPlace[0].geometry.location.lat(),
                lng: newPlace[0].geometry.location.lng()
            },
        })
    }

    onPlaceAdd = (newPlace) => {
        this.props.addPlaceCallback(newPlace);
    }

    componentDidMount() {
        // get user's current location
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;

                this.setState({
                    currentLocation: { lat: latitude, lng: longitude },
                    center: { lat: latitude, lng: longitude },
                    loading: false
                });
            },
            () => {
                this.setState({ loading: false });
            }
        );
    }

    render({ mapsApiLoaded, mapInstance, mapsapi } = this.state) {
        const { places, center, currentLocation } = this.state;

        return (
            <div className="map-container">
                {<GoogleMap
                    defaultZoom={15}
                    defaultCenter={defaultProps.defaultCenter}
                    center={this.state.center}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => { this.apiLoaded(map, maps) }}
                >
                    <Marker
                        text={"current location"}
                        lat={center.lat}
                        lng={center.lng}
                    />

                    {this.props.places && this.props.places.map((place) => (
                        <Marker
                            key={place.id}
                            text={place.name}
                            lat={place.geometry.location.lat()}
                            lng={place.geometry.location.lng()}
                        />
                    ))}

                </GoogleMap>}

                {mapsApiLoaded &&
                    (<Searchbox
                        map={mapInstance}
                        mapsapi={mapsapi}
                        placeholder={"enter a destination"}
                        onPlacesChanged={this.onPlacesChanged}
                        onPlaceAdd={this.onPlaceAdd}
                    />)}
            </div>
        );
    }
}

export default MapContainer;

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyCVCnlvTmnjOYLcbHE6jKnPLq9hb1UtThY"
// })(MapContainer);
