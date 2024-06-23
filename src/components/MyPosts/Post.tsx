import hinata from '../../img/hinata.jpg'
import Like from '../Button/Like'
import '../../styles/components/_post.scss'

const Post = () => {
  return (
    <div className='post'>
      <div className='post__content'>
        <img src={hinata} alt="hinata" className='post__img'/>
          <p className='post__text'>Hello sweetie </p>
      </div>
        
          <Like/>
    </div>
  )
}

export default Post
