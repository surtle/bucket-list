import React, { Component } from 'react';
import "assets/App.scss"

export class NavSidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <a href = "/" className="title">BucketList</a>
                <div className="navigation">
                <ul>
                    <a href="/"><li>trips</li></a>
                    <a href="/"><li>destinations</li></a>
                    <a href="/"><li>map</li></a>
                    <a href="/"><li>explore</li></a>
                    <a href="/"><li>profile</li></a>
                    <a href="/"><li>friends</li></a>
                </ul>
                </div>
            </div>
        );
      }
}

export default NavSidebar