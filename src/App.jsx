import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Promo from './components/Promo'
import TopSelling from './components/TopSelling'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Products />
      <Promo />
      <TopSelling />
      <Footer />
    </>
  )
}

export default App
