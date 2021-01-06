import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "assets/App.scss"

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <a href = "/" className="title">bucketlist</a>
                <div className="navigation">
                <ul>
                    <a href="/"><li>trips</li></a>
                    <li>destinations</li>
                    <li>map</li>
                    <li>explore</li>
                    <li>profile</li>
                    <li>friends</li>
                </ul>
                </div>
            </div>
        );
      }
}

export default Sidebar