import React from 'react'
import Buttons from './Buttons'
import '../css/frame.css'

const Frame = () => {
  return (
    <div className='rightSide'>
      <div className='image'>
        <img className='pic' src='/images/image-tanya.jpg' alt='' />
      </div>
      <Buttons />
    </div>
  )
}

export default Frame
