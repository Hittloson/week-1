import React, { useState } from 'react';
import AboutStyle from './AboutStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function About() {
  

  

  
  

  // Define the array of testimonials
const testimonials = [
  {
    name: 'Mark Wood',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human1.jpeg',
  },
  {
    name: 'M Crook',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human4.jpg',
  },
  {
    name: 'Dan Wood',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human2.jpeg',
  },
  {
    name: 'M.L Mila',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human5.jpg',
  },
  {
    name: 'Mark W',
    job: 'Web Developer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human3.jpg',
  },
  {
    name: 'Sheella K',
    job: 'UI/UX Designer',
    description:
      'This has always been one of my fave scent, since University days. It has provided me several other scents like, Drakkar, Cool Water and Hot Water by Davidoff, and Benetton for 5 years now!',
    image: 'image/human6.jpg',
  },
  
];




const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
    <div className='About-us About-us p-4 md:p-8'>
      <div className='about-us-header'>
        <h2>
          What our loving users are <br />
          saying <span>about us</span>
        </h2>

        <div className='scrol-btn'>
          <button >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button >
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>

      

        
          <Carousel responsive={responsive}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className='testimony-details'>
                <div className='image-names-job'>
                  <div className='testimonial-image'>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className='name-job'>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.job}</p>
                  </div>
                </div>
                <div className='description'>
                  <p>
                    <center>{testimonial.description}</center>
                  </p>
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
     
    </div>
  );
}

export default About;

