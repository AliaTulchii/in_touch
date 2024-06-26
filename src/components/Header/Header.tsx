import React from 'react'
import logo from '../../img/header/logo.png'
import '../../styles/components/_logo.scss'
import '../../styles/components/_header.scss'
import '../../styles/base/_containers.scss'

const Header = () => {
  return (
    <div className='header container'>
      <div className='logo'>
      <img src={logo} alt="logo" className='logo__img'/>
        <p className='logo__text'>
          <span className='logo__text logo__text--lavanda'>I</span>n
        </p>
        <p className='logo__text '>
          <span className='logo__text logo__text--lavanda'>T</span>ouch
        </p>
          </div>
    </div>
  )
}

export default Header
