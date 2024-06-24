import { Link, useLocation } from "react-router-dom"

const Nav = () => {
  const location = useLocation()
  
  
  return (
    <div className='nav'>
          <ul className='nav__list'>
        <li className={`nav__item ${location.pathname === '/profile' ? 'active' : ''}`}>
                  
                  <Link to="/profile" className='nav__link'>Profile</Link>
              </li>
              <li className={`nav__item ${location.pathname === '/dialogs' ? 'active' : ''}`}>
                  <Link to="/dialogs" className='nav__link'>Messages</Link>
              </li>
              <li className={`nav__item ${location.pathname === '/news' ? 'active' : ''}`}>
                  <Link to="/news" className='nav__link'>News</Link>
              </li>
              <li className={`nav__item ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <Link to="/settings" className='nav__link'>Settings</Link>
              </li>
      </ul>
    </div>
  )
}

export default Nav
