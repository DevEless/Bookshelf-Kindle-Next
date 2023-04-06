
import Navbar from './section/Navbar'
import CarouselComponent from './components/Carrousel'


import React from 'react'

function Home() {
  return (
    <div id='body' className='h-screen w-screen'>
      <Navbar/>
      <CarouselComponent/>

{/* 
    <script src="https://kit.fontawesome.com/dd3386e72b.js" crossorigin="anonymous"></script> */}
    </div>
  )
}

export default Home
