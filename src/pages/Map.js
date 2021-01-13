import React, { Component } from 'react';
import MapSidebar from 'components/MapSidebar.js';
import MapContainer from 'components/MapContainer.js';

class Map extends Component {
    render() {
        return (
            <div className="map-interface">
                <div className="map-header">
                    <a href = "/">BucketList</a>
                </div>
                <div className="map-body">
                    <MapSidebar />
                    <MapContainer />
                </div>
            </div>
        )
    };
};

export default Map