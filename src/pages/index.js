
import Navbar from './section/Navbar'
import CarouselComponent from './components/Carrousel'
import Footer from './components/Footer'

import React from 'react'
import Section1 from './section/Section1'
import Section2 from './section/Section2'
import Section3 from './section/Section3'
function Home() {
  return (
    <div id='body' className='h-screen w-screen'>
      <Navbar/>
      <CarouselComponent/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
 

    </div>
  )
}

export default Home
