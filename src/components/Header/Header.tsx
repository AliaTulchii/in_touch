import React from 'react'
import logo from '../../img/header/logo.png'
import '../../styles/components/_logo.scss'
import '../../styles/components/_header.scss'
import '../../styles/base/_containers.scss'

const Header = () => {
  return (
    <div className='header container'>
          <div className='logo'>
              <p className='logo__text'>InT</p>
              <img src={logo} alt="logo" className='logo__img'/>
              <p className='logo__text'>uch</p>
          </div>
    </div>
  )
}

export default Header
