import React, { Component } from 'react';
import 'assets/Login.scss';
import Button from 'components/Button.js'

class Login extends Component {
    render () {
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
}
  
export default Login