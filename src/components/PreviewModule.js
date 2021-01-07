import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "assets/Summaries.scss"

export class PreviewModule extends Component {
    render() {
        return (
            <div className="trip">
                <img src={this.props.image_url}></img>
                <h2>{this.props.trip_name}</h2>
                <p className="descriptor">{this.props.descriptor}</p>
            </div>
        );
      }
}

export default PreviewModule