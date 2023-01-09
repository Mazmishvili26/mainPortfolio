import React from 'react'
import './Landing.css'

// import assets

import portfo from '../../assets/img.png'

// import Components

import Header from '../Header Component/Header'

function Landing() {
  return (

    <>
      <Header/>
      <section className='landing-section' id='home'>

        <div className='container'>

          <div className='landing-container'>

            <div className='landing-left-block'>
              <h1>Nikoloz <p className='extra-text'>Mazmishvili</p></h1>
              <p className='job-title'>Front end developer | React JS</p>
              <a href='#contact'>
                <button className='connect-btn'>Get Connected</button>
              </a>
            </div>

            <div className='landing-right-block'>
              <div className='landing-img-box'>
                <img src={portfo}></img>
              </div>
            </div>

          </div>

        </div>


    </section>
    </>

  )
}

export default Landing