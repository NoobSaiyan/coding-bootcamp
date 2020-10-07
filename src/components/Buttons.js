import React from 'react'
import '../css/buttons.css'

const Buttons = () => {
  return (
    <div className='button'>
      <div className='leftButton'>
        <img className='but' src='/images/icon-prev.svg' alt='' />
      </div>
      <div className='righttButton'>
        <img className='but' src='/images/icon-next.svg' alt='' />
      </div>
    </div>
  )
}

export default Buttons
