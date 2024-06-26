import React from 'react'
import '../../styles/components/_messages.scss'


interface MessageProps{
    text: string;
    id: string;
}
const Message: React.FC<MessageProps> = ({text, id}) => {
  return (
    <div className="messages__message" id={id}>
          <p>{text}</p>
        </div>
  )
}

export default Message
