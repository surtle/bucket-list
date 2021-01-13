import React, { Component } from 'react';
import deleteButton from 'assets/delete-icon.svg';
import 'assets/Destination.scss';

class Destination extends Component {
    render() {
        return (
            <div className="destination">
                <div className="destination-info">
                    <h2 className="destination-name">{this.props.destinationName}</h2>
                    <p className="destination-addr">{this.props.destinationAddr}</p>
                </div>
                <div className="remove-button">
                    <img src={deleteButton} alt="remove destination"></img>
                </div>
            </div>
        )
    };
};

export default Destination