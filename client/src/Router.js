import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./Views/Home"
import Test from "./Views/Test"
import Dashboard from "./Views/Dashboard"

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/test" exact component={Test}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route component={Error}/>
      </Switch>
    )
  }
}
