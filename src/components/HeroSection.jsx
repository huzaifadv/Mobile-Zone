
import React from 'react'
import Mobiles from './Mobiles'

export default function HeroSection() {
  return (
    <>
      <div className="container mx-auto sm:mt-[180px] sm:mb-[220px] mt-[100px]">
        <div className='grid lg:grid-cols-[55%_auto] '>

            <div className='hero-text sm:pr-[200px] my-auto'>
               <h3 className='sm:text-[20px] text-[17px] font-[700] text-[#6366F1]'>Welcome to Mobile Zone!</h3>
               <h1 className='sm:text-[65px] text-[33px] font-[800] mt-[20px]'>Everything You Need in One Place!</h1>
               <p className='sm:text-[19px] text-[15px] mt-[20px] text-[#7a7878]'>Your one-stop mobile shop for the latest smartphones, stylish accessories, and expert repair services. Enjoy unbeatable prices, top brands, and fast service all under one roof!</p>
               <button className='mt-[25px] btn-hero'>Shop Now</button>
            </div>

            <div className='text-center'>
            <Mobiles />
            </div>

        </div>
      </div>
    </>
  )
}
