import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'assets/Login.scss';
import Button from 'components/Button.js'

function Login() {
    return (
        <div className="login">
            <a href = "/" class="title">BucketList</a>

            <div id="buttons">
                <Button url="/login" text="login" />
                <Button url="/login" text="sign up" />
            </div>
        </div>
    );
  }
  
  export default Login