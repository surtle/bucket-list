import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "assets/Button.scss"

export class Button extends Component {
    render() {
        return (
          <div>
            <a href={this.props.url}>
              <button class="button">
                {this.props.text}
              </button>
            </a>
          </div>
        );
      }
}

export default Button