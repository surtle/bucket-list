import React, { Component } from 'react';
import "assets/Button.scss"

export class Button extends Component {

    static defaultProps = {
        text: '',
        onclick: null,
    };

    render() {
        return (
            <div>
                <a href={this.props.url}>
                    <button className="button" onClick={this.props.onClick}>
                        {this.props.text}
                    </button>
                </a>
            </div>
        );
    }
}

export default Button