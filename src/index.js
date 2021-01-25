import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from 'pages/App.js'
import Login from 'pages/Login.js'
import MapPage from 'pages/MapPage.js'

const routing = (
  <Router>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/map" component={MapPage} />
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))