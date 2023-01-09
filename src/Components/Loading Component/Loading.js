import React from 'react'
import './Loading.css'


// import assets

import loadingGIF from '../../assets/loading.gif'

function Loading() {

    
  return (
    <div className='loading-container'>
        <img src={loadingGIF} className="loading"></img>
    </div>
  )
}

export default Loading