import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core'

import WireTrackerImg from '../../Assets/img/wiretracker-logo.png'
import '../../Assets/css/loginWindow.css'

export default class LoginWindow extends Component {
        
    
  render() {
    return (
      <div className="loginwindow">
        <img src={WireTrackerImg} alt="logo"/>
        <div className="LoginForm">
          <TextField 
              className="LoginFormItem"
              label="Username"/>
          <TextField 
              className="LoginFormItem"
              type="password" 
              label="Password"/>
          <Button 
              className="LoginFormItem"
              onClick={() => window.location.href = "/dashboard"} 
              variant="outlined"
              color="default"
              size="large"
              >
              Login
          </Button>
        </div>
      </div>
    )
  }
}
