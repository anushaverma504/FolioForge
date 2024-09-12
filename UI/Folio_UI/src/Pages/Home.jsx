import React from 'react'
import '../Styles/Home.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Navbar />
        <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Home