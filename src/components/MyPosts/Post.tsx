import hinata from '../../img/hinata.jpg'
import Like from '../Button/Like'
import '../../styles/components/_post.scss'


interface PostProps {
  message: string;
}

const Post: React.FC<PostProps> = ({message}) => {
  return (
    <div className='post'>
      <div className='post__content'>
        <img src={hinata} alt="hinata" className='post__img'/>
          <p className='post__text'>{message} </p>
      </div>
        
          <Like/>
    </div>
  )
}

export default Post
