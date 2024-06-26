import { NavLink, useLocation } from "react-router-dom"
import { LuHome, LuMessagesSquare, LuNewspaper   } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";



const Nav = () => {
  const location = useLocation()
  
  
  return (
    <div className='nav'>
          <ul className='nav__list'>
        <li className={`nav__item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <LuHome />
                  <NavLink to="/profile" className='nav__link'>Home</NavLink>
              </li>
              <li className={`nav__item ${location.pathname === '/dialogs' ? 'active' : ''}`}>
              <LuMessagesSquare  />
          <NavLink to="/dialogs" className='nav__link'>Messages</NavLink>
              </li>
              <li className={`nav__item ${location.pathname === '/news' ? 'active' : ''}`}>
                  <LuNewspaper />
          <NavLink to="/news" className='nav__link'>News</NavLink>
              </li>
              <li className={`nav__item ${location.pathname === '/settings' ? 'active' : ''}`}>
                  <IoSettingsOutline/>
          <NavLink to="/settings" className='nav__link'>Settings</NavLink>
              </li>
      </ul>
    </div>
  )
}

export default Nav
