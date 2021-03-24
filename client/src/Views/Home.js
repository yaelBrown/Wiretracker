import React, { Component } from 'react'
import '../Assets/css/home.css'

import LoginWindow from '../Components/Home/LoginWindow'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <LoginWindow/>
            </div>
        )
    }
}
