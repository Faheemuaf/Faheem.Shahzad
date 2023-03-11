import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/project3.png'
import IMG2 from '../../assets/project5.png'
import IMG3 from '../../assets/project4.png'
import IMG4 from '../../assets/project1.png'
import IMG5 from '../../assets/project2.png'
import IMG6 from '../../assets/project6.png'



const datalist = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Profile card',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/Profile-card',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Udacity Page Design',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/udacity-page-code',
  },

  {
    id: 3,
    image: IMG3,
    title: 'CoinCloud Mobile App',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/import.io-website-code',
  },

  {
    id: 4,
    image: IMG4,
    title: 'Team Members Website',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/Employees-card',
  },

  {
    id: 5,
    image: IMG5,
    title: 'Landing Page',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/Portfolio-website',
  },

  {
    id: 6,
    image: IMG6,
    title: 'Gocery Mobile App',
    github: 'https://github.com/Faheemuaf?tab=repositories',
    demo: 'https://github.com/Faheemuaf/Pexcil-website-design',
  },

];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          datalist.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
        
      </div>
    </section>
  )
}


export default Portfolio







{/* <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG2} alt='PORTFOLIO-1'/>
          </div>
            <h3>This is the portfolio item title</h3>
            <div className="portfolio__cta">
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG3} alt='PORTFOLIO-1'/>
          </div>
            <h3>This is the portfolio item title</h3>
            <div className="portfolio__cta">
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG4} alt='PORTFOLIO-1'/>
          </div>
            <h3>This is the portfolio item title</h3>
            <div className="portfolio__cta">
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG5} alt='PORTFOLIO-1'/>
          </div>
            <h3>This is the portfolio item title</h3>
            <div className="portfolio__cta">
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__image">
            <img src={IMG6} alt='PORTFOLIO-1'/>
          </div>
            <h3>This is the portfolio item title</h3>
            <div className="portfolio__cta">
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/Faheemuaf?tab=repositories' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article> */}
