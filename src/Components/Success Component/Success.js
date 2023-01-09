import React from 'react'
import './Success.css'

function Success({setSuccessMSG}) {
  return (
    <div className='success-container'>
        <div className='success-msg'>
            <p>მადლობა, თქვენი მესიჯი წარმატებით გაიგზავნა!</p>
            <button onClick={() => setSuccessMSG(false)}>გააგრძელე დათვალირება</button>
        </div>
    </div>
  )
}

export default Success