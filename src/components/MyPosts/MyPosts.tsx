import Post from './Post'
import '../../styles/components/_posts.scss'
import Button from '../Button/Button'

const MyPosts = () => {
  return (
    <div className='posts'>
        <h2 className='posts__title'>My posts</h2>
          <div className='posts__textarea-container'>
               <textarea placeholder='your news...' className='posts__textarea' />
        </div>
         
          <Button text={'Send'} />
          
          <Post/>
      </div>
  )
}

export default MyPosts
