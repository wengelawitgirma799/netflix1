import React from 'react'
import Header from '../assets/components/Header/Header'
import Footer from '../assets/components/Footer/Footer'
import Banner from '../assets/components/banner/Banner'
import Rowlist from '../assets/components/rows/rowlist/Rowlist'

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Rowlist/>
      <Footer/>
    </div>
  )
}

export default Home
