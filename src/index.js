import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from 'components/App.js'
import Login from 'components/Login.js'

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))