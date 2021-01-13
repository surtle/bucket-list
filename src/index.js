import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from 'pages/App.js'
import Login from 'pages/Login.js'
import Map from 'pages/Map.js'

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={Map} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))