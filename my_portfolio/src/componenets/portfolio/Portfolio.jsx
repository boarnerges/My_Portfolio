import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Image_1.webp'
import IMG2 from '../../assets/image_2.webp'
import IMG3 from '../../assets/image_3.webp'


const data = [
  {
    id:1,
    image: IMG1,
    title: 'Website Design for University',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18591114-Website-Design-for-University'
  },{
    id:2,
    image: IMG2,
    title: 'Messenges Dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18590733-Messenges-Dashboard'
  },{
    id:3,
    image: IMG3,
    title: 'TTC-APP',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18590195-TTC-APP'
  },{
    id:4,
    image: IMG2,
    title: 'Messenges Dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18590733-Messenges-Dashboard'
  },{
    id:5,
    image: IMG1,
    title: 'Website Design for University',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18591114-Website-Design-for-University'
  }, {
    id:6,
    image: IMG3,
    title: 'TTC-APP',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18590195-TTC-APP'
  }
]
function Portfolio() {
  return (
    <section id ='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
    data.map(({id, image, title, github, demo}) => {
      return (
              <article key = {id} className='portfolio__item'>
                  <div className="portfolio__item-image">
                      <img src = {image} alt = {title}/>
                      </div>
                      <h3>{title}</h3>
                     <div className="portfolio__item-cta">
                      <a href={github} className='btn'>Github</a>
                      <a href={demo} className='btn btn-primary'
                      target= '_blank'>Live Demo</a>
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