import React from 'react'
import '../css/info.css'

const Info = () => {
  return (
    <div className='main'>
      <img className='qoute' src='/images/pattern-quotes.svg' alt=''></img>
      <div className='message'>
        “ I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the job
        of my dreams and so excited about the future. ”
      </div>
      <div className='foot'>
        <span className='name'>Tanya Sinclair</span>{' '}
        <span className='job'>UX Engineer</span>
      </div>
    </div>
  )
}

export default Info
