import React from 'react'
import "./testmonials.css"
import AVTAR1 from '../../assets/avatar1.jpg'
import AVTAR2 from '../../assets/avatar2.jpg'
import AVTAR3 from '../../assets/avatar3.jpg'
import AVTAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const reviewlist = [
  {
    avatar: AVTAR1,
    name: "Greenly",
    review: "FS has helped us bring on more partners more quickly because we’re able to augment our internal team and get work done faster."
  },

  {
    avatar: AVTAR2,
    name: "Nick Conner",
    review: "I couldn’t be more pleased with the FS team. Their engineering product is top-notch,as is their client relations and account management. From the beginning, they felt like members of our own team—true partners rather than vendors."
  },

  {
    avatar: AVTAR3,
    name: "Nick David",
    review: "FS has helped us bring on more partners more quickly with the best UI/UX design because we’re able to augment our internal team and get work done faster."
  },

  {
    avatar: AVTAR4,
    name: "Salman Ahmad",
    review: "Provide the best testing services with highlight the high risk bugs on the production website"
  },


];




const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
                  // install Swiper modules
                  modules={[ Pagination ]} spaceBetween={40}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}>
        {
          reviewlist.map(({ avatar, name, review}, index) => {
          
          return (

            <SwiperSlide key={index} className="testimonial">        
              <div className="client__avatar">
                <img src={avatar} alt="client-1" />
              </div>
              <h5 className="client__name">
                {name}
              </h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>
          )
})
        }
      </Swiper>
    </section>
  )
}

export default Testmonials


