
import Navbar from './section/Navbar'
import CarouselComponent from './components/Carrousel'


import React from 'react'
import Section1 from './section/Section1'
import Section2 from './section/Section2'
function Home() {
  return (
    <div id='body' className='h-screen w-screen'>
      <Navbar/>
      <CarouselComponent/>
      <Section1/>
      <Section2/>

{/* 
    <script src="https://kit.fontawesome.com/dd3386e72b.js" crossorigin="anonymous"></script> */}
    </div>
  )
}

export default Home
