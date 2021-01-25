import React, { Component } from 'react';
import MapSidebar from 'components/MapSidebar.js';
import MapContainer from 'components/MapContainer.js';

class MapPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          places: []
        };
    }

    addPlaceCallback = (newPlace) => {
        this.setState(
            { places: [ ...this.state.places, newPlace] }
        );

        console.log(this.state.places);
    }

    removePlaceCallback = (placeId) => {
        const newPlaceList = this.state.places.filter((place) => placeId !== place.place_id);
 
        this.setState(
            { places: newPlaceList }
        );

        console.log(this.state.places);
    }

    render() {
        return (
            <div className="map-interface">
                <div className="map-header">
                    <a href = "/">BucketList</a>
                </div>
                <div className="map-body">
                    <MapSidebar
                        places={this.state.places}
                        removePlaceCallback={this.removePlaceCallback}
                    />
                    <MapContainer
                        places={this.state.places}
                        addPlaceCallback={this.addPlaceCallback} 
                    />
                </div>
            </div>
        )
    };
};

export default MapPage