import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

import Home from "./Views/Home"
import Test from "./Views/Test"

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/test" exact component={Test}/>
                <Route component={Error}/>
            </Switch>
        )
    }
}
