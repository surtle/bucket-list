import React, { Component } from "react";

export class SignIn extends React.Component {
    constructor(props) {
      super(props)
      this.state = {signedIn : false};    // is user signed in yet?
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      signIn();
      
      // user has signed in
      this.setState(state => ({
        signedIn: true
      }));
    }
  
    render() {
        if(this.state.signedIn) {
          return(<button onClick={this.handleClick}> Sign In </button>)
        }
    }
}
