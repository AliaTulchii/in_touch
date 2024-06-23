import React from 'react'
import '../../styles/components/_btn.scss'

interface ButtonProps{
    text: string;
}
const Button: React.FC<ButtonProps> = ({text}) => {
  return (
    <div className='btn__box'>
        <button className='btn'>
              {text}
      </button>
    </div>
  )
}

export default Button
