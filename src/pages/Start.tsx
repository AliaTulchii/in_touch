import React from 'react'
import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Profile from '../components/Profile/Profile'
import '../styles/components/_start.scss'


const Start = () => {
  return (
    <div className='start container'>
      <Header />
      <Nav />
      <Profile/>
    </div>
  )
}

export default Start
