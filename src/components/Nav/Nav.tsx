import React from 'react'

const Nav = () => {
  return (
    <div className='nav'>
          <ul className='nav__list'>
              <li className='nav__item'>
                  <a className='nav__link'>Profile</a>
              </li>
              <li className='nav__item'>
                  <a className='nav__link'>Messages</a>
              </li>
              <li className='nav__item'>
                  <a className='nav__link'>News</a>
              </li>
              <li className='nav__item'>
                  <a className='nav__link'>Settings</a>
              </li>
      </ul>
    </div>
  )
}

export default Nav
