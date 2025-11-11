import React from 'react'
import Hero from '../components/Hero'
import Classes from '../components/Classes'
import KnowUs from '../components/KnowUs'
import Gallery from '../components/Gallery'
import Video from '../components/Video'
import Join from '../components/Join'
import Testimonial from '../components/Testimonial'
import Price from '../components/Price'

const Home = () => {
  return (
    <div>
        <Hero />
        <Classes />
        <KnowUs />
        <Gallery />
        <Video />
        <Join />
        <Testimonial />
        <Price />
    </div>
  )
}

export default Home