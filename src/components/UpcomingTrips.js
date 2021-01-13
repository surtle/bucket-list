import React, { Component } from 'react';
import PreviewModule from "components/PreviewModule.js";
import "assets/Summaries.scss";

export class UpcomingTrips extends Component {
    render() {
        return (
            <div className="upcoming-trips">
                <h1>Upcoming Trips</h1>
                <div className="item-previews">
                    <div className="preview">
                        <PreviewModule 
                            image_url="https://i.pinimg.com/originals/a4/4b/2c/a44b2cd7559c119290660d9e6b62b37b.jpg"
                            trip_name="Hawaii"
                            descriptor="Dec 12 - Dec 21, 2021"
                        />
                    </div>
                    <div className="preview">
                        <PreviewModule 
                            image_url="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/01/nevada.jpg?w=1100&h=600&s=1"
                            trip_name="Cross-Country"
                            descriptor="Sep 12 - Oct 21, 2022"
                        />
                    </div>
                </div>
            </div>
        );
      }
}

export default UpcomingTrips