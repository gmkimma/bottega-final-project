import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/navigation/logo.png'

export default function NavBar () {
  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='right-side'>
        <div className='nav-link-wrapper'>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}
