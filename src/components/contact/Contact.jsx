import React from 'react'
import "./contact.css"
import {MdMarkEmailRead} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead className='contact__icon' />
            <h4>Email</h4>
            <h5>fahimuaf@gmail.com</h5>
            <a href="mailto:fahimuaf@gmail.com" target='_blank' className="mail">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__icon'/>
            <h4>Whatsapp</h4>
            <h5>+923420655194</h5>
            <a href="https://api.whatsapp.com/send?phone+923420655194" target='_blank' className="mail">Send a message</a>
          </article>

          <article className="contact__option">
            <BsTwitter className='contact__icon' />
            <h4>Twitter</h4>
            <h5>@FaheemShahzad</h5>
            <a href="mailto:fahimuaf@gmail.com" target='_blank' className="mail">Send a message</a>
          </article>
        </div>

      <form action=''>
        <input type='text' name='name' placeholder='Enter Your Name'  required />
        <input type='email' name='email' placeholder='Enter Your Email'  required />
        <textarea  name='message' placeholder='Enter Your Query' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>  


      </div>

    </section>
  )
}

export default contact