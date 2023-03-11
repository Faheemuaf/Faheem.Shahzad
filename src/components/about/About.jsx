import React from 'react'
import "./about.css"
import Me from "../../assets/me-about-1.jpg"
import {BsAwardFill} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {BsFolderFill} from 'react-icons/bs'

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
        <img src={Me} alt="About my profile" className="me__about-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon"/>
              <h5>Experience</h5>
              <small>5 years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>

            <article className="about__card">
              <BsFolderFill className="about__icon"/>
              <h5>Projects</h5>
              <small>70+ Completed</small>
            </article>
          </div>

          <p>
          One of the most important skills for a QA professional is attention to detail. 
          Clients want to know that you are thorough and meticulous in your work, and that you will catch any errors
          or issues that could impact the quality of their product
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about