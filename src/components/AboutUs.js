import React from 'react'
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import About from "./About";
import Questions from './Questions';

function AboutUs() {
  return (
    <div className='about'>
      <Header />
      <Content />
      <About />
      <Questions/>
      <Footer />
    </div>
  )
}

export default AboutUs
