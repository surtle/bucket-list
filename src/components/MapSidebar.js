import React, { Component } from 'react';
import "assets/Map.scss";
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import Button from "components/Button.js";
import DateRangePickerWrapper from 'components/DateRangePickerWrapper.js';
import Destination from './Destination';
import { isEmpty } from 'lodash';


let destination1 = {
    destinationName: "Balboa Park",
    destinationAddr: "8400 Genesee Ave",
};

var mockDestinations = [destination1];

class MapSidebar extends Component {

    processPlaces(placesList) {
        return placesList.map((p) => [p.place_id, p.name, p.formatted_address]);
    }

    render() {

        let formattedPlaces = this.processPlaces(this.props.places);

        return (
            <div className="map-sidebar">
                <h2>Trip Details</h2>
                <div className="trip-details">
                    <DateRangePickerWrapper />
                    <div className="checkbox">
                        <input type="checkbox" className="checkbox-circle" id="specified_dates"></input>
                        <label> I have no set dates</label>
                    </div>
                </div>
                <h2>Destinations</h2>
                <div className="trip-destinations">
                    <div className="destinations">
                        {!isEmpty(formattedPlaces) && formattedPlaces.map((place) => (
                            <Destination
                                destinationId={place[0]}
                                destinationName={place[1]}
                                destinationAddr={place[2]}
                                removePlaceCallback={this.props.removePlaceCallback}
                            />
                        ))}
                        {isEmpty(formattedPlaces) &&
                            <p className="default-message"> Add some destinations to get started! </p>
                        }
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