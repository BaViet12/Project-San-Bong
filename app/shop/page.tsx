import React from 'react'
import Navbar from '../componentshop/Navbar'
import Carousel from '../componentshop/Carousel'
import Content from '../componentshop/Content'
import Content1 from '../componentshop/Content1'
import Content2 from '../componentshop/Content2'

const page = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Carousel></Carousel>
        <Content></Content>
        <Content1></Content1>
        <Content2></Content2>
    </div>
  )
}

export default page