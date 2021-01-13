import React, { Component } from 'react';
import "assets/Map.scss";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import Button from "components/Button.js";
import DateRangePickerWrapper from 'components/DateRangePickerWrapper.js';
import Destination from './Destination';


let destination1 = {
    destinationName: "Balboa Park",
    destinationAddr: "8400 Genesee Ave",
};

var mockDestinations = [destination1];

class MapSidebar extends Component {

    processDestinations(props) {
        let destinationList;

        if (props.destinations.length > 0) {
            destinationList = props.destinations.map(d =>
                <Destination
                    destinationName={d.destinationName}
                    destinationAddr={d.destinationAddr}
                />
            );

            return destinationList;
        } else {
            return (<p className="default-message"> Add some destinations to get started! </p>);
        }
    };

    render() {
        return (
            <div className="map-sidebar">
                <div className="trip-details">
                    <h2>Trip Details</h2>
                    <DateRangePickerWrapper />
                </div>
                <div className="trip-destinations">
                    <h2>Destinations</h2>
                    <div className="destinations">
                        <this.processDestinations destinations={mockDestinations} />
                    </div>
                </div>
                <div className="submit-button">
                    <Button 
                        text="create itinerary"
                    />
                </div>
            </div>
        )
    }
}

export default MapSidebar;