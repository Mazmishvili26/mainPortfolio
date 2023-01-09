import React, { useRef } from 'react'
import './Footer.css'
import emailjs from 'emailjs-com'

function Footer({setSuccessMSG, setLoading}) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.sendForm('service_gn51e0r', 'template_yw3vnfb', form.current, 'hCJ6MU5aBFbb94kCD')
          .then((result) => {
            setLoading(false);
            setSuccessMSG(true);
              console.log(result.text);
          }, (error) => {
              alert('დაფიქსირდა შეცდომა,სცადეთ ხელახლა!' +error);
          });
      };

  return (
    <section className='footer-section'>
        <div className='container footer-container'>

            <div className='footer-left'>
                <h3>Contact me</h3>
                <p>I am looking for a job as a react developer</p>
                <span>Contact me with social media</span>
            </div>

            <div className='footer-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='btn-container'>
                        <input placeholder='Your email here' type='email' name='email'/>
                        <button type='submit'>Send now</button>
                    </div>
                </form>
            </div>

        </div>

        <div className='container'>
            <div className='footer-credits'>
                <p>Nikoloz Mazmishvili © 2022</p>
            </div>
        </div>

    </section>
  )
}

export default Footer