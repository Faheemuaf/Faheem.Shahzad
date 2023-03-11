import React from 'react'
import "./services.css"
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className='service__icon'/>
              <p>User Research: Conducting user research studies to understand the needs</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>User Interface Design: Designing the user interface of digital products</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Wireframing and Prototyping: Creating wireframes and prototypes</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Interaction Design: Designing the interactions and animations</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Responsive Design: Designing digital products that are optimized</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Accessibility Design: Ensuring that digital products are accessible to users</p>
            </li>
          </ul>
        </article>

      {/* End of ui/ux design */}

      <article className="service">
          <div className="service__head">
            <h3>Website Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className='service__icon'/>
              <p>Custom Website Design: We create custom website designs</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Responsive Web Development: We ensure that your website is responsive and optimized</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Content Management Systems (CMS): We develop websites with user-friendly CMS platforms</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>E-Commerce Development: We create e-commerce websites that are secure, reliable</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Search Engine Optimization (SEO): We optimize your website to improve its visibility</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Web Analytics: We implement web analytics tools, such as Google Analytics.</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Website Maintenance: We provide ongoing website maintenance services</p>
            </li>
          </ul>
        </article>
        
        {/* end of web development */}

        <article className="service">
          <div className="service__head">
            <h3>QA Services</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck  className='service__icon'/>
              <p>Performance Testing: Evaluating software performance under various workloads</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Test Automation: Developing automated test scripts to increase testing efficiency</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Security Testing: Evaluating software security, identifying potential vulnerabilities</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Usability Testing: Evaluating software usability and user experience</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Regression Testing: Ensuring that changes to software do not impact existing functionality</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Mobile Testing: Testing mobile applications for functionality, performance</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Test Execution and Reporting: Performing testing activities, documenting test result</p>
            </li>
            <li>
              <BiCheck  className='service__icon'/>
              <p>Functional Testing: As intended and meets its functional requirements</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services