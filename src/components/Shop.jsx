import React from 'react'
import Products from './Products'

export default function Shop() {
  return (
    <>
      {/*------- Banner -------*/}
      <div className='grid grid-cols-1 mb-[100px]'>
        <div className='promo text-center'>
          <h1 className='sm:text-[65px] text-[33px] font-[700] mt-[20px] text-[#fff]'>Shop Now</h1>
          <h3 className='sm:text-[20px] text-[17px] font-[700] text-[#8b8df1]'>Mobile Zone!</h3>
        </div>
      </div>

      {/*------- Products -------*/}

      <Products />

    </>
  )
}
