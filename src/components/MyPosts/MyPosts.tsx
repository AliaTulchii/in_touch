import React from 'react'
import Post from './Post'

const MyPosts = () => {
  return (
    <div>
        <h2>My posts</h2>
        <textarea placeholder='your news...' />
          <button>Send</button>
          
          <Post/>
      </div>
  )
}

export default MyPosts
