import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "assets/Login.css"
import Button from 'components/Button.js'

function Login() {
    return (
        <div id="container">
                <a href = "/" class="title">BucketList</a>

                <div id="buttons">
                    <Button url="/login" text="login" />
                    <Button url="/login" text="sign up" />
                </div>
        </div>
    );
  }
  
  export default Login