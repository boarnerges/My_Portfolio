import React from 'react'
import './testimonials.css'
import AVRT1 from '../../assets/Avatar_1.jpg'
import AVRT2 from '../../assets/Avatar_2.jpg'
import AVRT3 from '../../assets/Avatar_3.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVRT1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.it, at dignissimos, deserunt deleniti voluptas quas, eveniet unde    voluptates facere ab quaerat nesciunt hic nisi maxime! Nulla excepturi     doloremque officia deleniti? '

  },

  {
    avatar: AVRT2,
    name: 'Babamus Dele',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.it, at dignissimos, deserunt deleniti voluptas quas, eveniet unde    voluptates facere ab quaerat nesciunt hic nisi maxime! Nulla excepturi     doloremque officia deleniti? '

  },

  {
    avatar: AVRT3,
    name: 'Akin Seyi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.it, at dignissimos, deserunt deleniti voluptas quas, eveniet unde    voluptates facere ab quaerat nesciunt hic nisi maxime! Nulla excepturi     doloremque officia deleniti? '

  },

  {
    avatar: AVRT1,
    name: 'Dolapo Aye',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.it, at dignissimos, deserunt deleniti voluptas quas, eveniet unde    voluptates facere ab quaerat nesciunt hic nisi maxime! Nulla excepturi     doloremque officia deleniti? '

  }
]



const Testimonials = () => {
  return (
    <section id = 'testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      >


       {
        data.map(({avatar, name, review }, index) => {
            return (
              <SwiperSlide key = {index} className='testimonial'>         
                  <div className="client__avatar">
                    <img src={avatar}  alt = {name}/>
                  </div>
    
                <h5 className="client__name">{name}</h5>
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

export default Testimonials