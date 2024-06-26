import Post from './Post'
import '../../styles/components/_posts.scss'
import Button from '../Button/Button'

const MyPosts = () => {
  let messagesData = [
    { message: 'Hello my friends today was an amazing day!' },
    { message: 'This is my first post'},
  ]
  return (
    <div className='posts'>
        <h2 className='posts__title'>My posts</h2>
          <div className='posts__textarea-container'>
               <textarea placeholder='your news...' className='posts__textarea' />
        </div>
         
          <Button text={'Send'} />
          
      {messagesData.map((message, index) => (
        <Post key={index} message={message.message} />
      ))}
          
      </div>
  )
}

export default MyPosts
