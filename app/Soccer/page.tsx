'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Imagesearch from '../components/Imagesearch'
import Intro from '../components/Intro'


const page = () => {
  return (
    <div className=''>
       <Navbar></Navbar> 
       <Imagesearch></Imagesearch>
       <Intro></Intro>
    </div>
  )
}

export default page