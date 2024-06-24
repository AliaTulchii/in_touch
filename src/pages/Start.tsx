import Header from '../components/Header/Header'
import Nav from '../components/Nav/Nav'
import Profile from './Profile/Profile'
import '../styles/components/_start.scss'
import Dialogs from './Dialogs/Dialogs'
import { Route, Routes } from 'react-router-dom'
import News from './News/News'
import Settings from './Settings/Settings'


const Start = () => {
  return (
    <div className='start container'>
      <Header />
      <Nav />
      <div className='start__content'>
        <Routes >
        <Route path='/profile' element={<Profile/>}/>  
        <Route path='/dialogs' element={<Dialogs/>}/>
        <Route path='/news' element={<News />} />
        <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
      
      
    </div>
  )
}

export default Start
