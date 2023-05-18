import React, { Component } from 'react'

import NavBar from '../navigation/navigation-container'

export default class Login extends Component {
  render () {
    return (
      <>
        <div className='login-page'>
          <NavBar />

          <div className='login-wrapper'>
            <div className='left-side'>
              <h1>Login information will go here!</h1>
            </div>
            <div className='right-side'></div>
          </div>
        </div>
      </>
    )
  }
}
