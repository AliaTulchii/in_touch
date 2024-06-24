import hinata from '../../img/hinata.jpg'
import MyPosts from '../../components/MyPosts/MyPosts'


const Profile = () => {
  return (
    <div>
      <div className='content__baner'>
        {/* <img src={lavanda} alt="lavanda" className='content__baner-img'/> */}
      </div>

      <div className='content__user'>
        <img src={hinata} alt="girl" className='content__user-img'/>

        <div className='content__user-data'>
          <h1 className='content__user-name'>Eva Wozniak</h1>

          <p className='content__user-text'><span className='content__user-span'>Date of Birth:</span> 2 january</p>
          <p className='content__user-text'><span className='content__user-span'>City:</span> Szczecin</p>
          <p className='content__user-text'><span className='content__user-span'>Education:</span> BSU'11</p>
        </div>
      </div>

      <MyPosts/>
    </div>
  )
}

export default Profile
