import React from 'react'

import "./styles/Home.css"
import { Navbar } from './components/Navbar'
import { TopContainer } from './components/TopContainer'
import { Banner } from './components/Banner'

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <TopContainer/>
      <Banner/>
    </div>
  )
}

