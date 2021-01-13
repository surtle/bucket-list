import React, { Component } from 'react';
import PreviewModule from "components/PreviewModule.js";
import "assets/Summaries.scss";

export class PlacesToGo extends Component {
    render() {
        return (
            <div className="places-to-go">
                <h1>Places To Go</h1>
                <div className="item-previews">
                    <div className="preview">
                        <PreviewModule 
                            image_url="https://i.insider.com/58d919eaf2d0331b008b4bbd?width=750&format=jpeg&auto=webp"
                            trip_name="Eiffel Tower"
                            descriptor="Feb 22, 2021"
                        />
                    </div>
                    <div className="preview">
                        <PreviewModule 
                            image_url="https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Iceland/Reykjavik/reykjavik-guide-lead-image-48-hours-xlarge.jpg"
                            trip_name="Iceland"
                            descriptor="Jun 13, 2021"
                        />
                    </div>
                </div>
            </div>
        );
      }
}

export default PlacesToGo