'use client'

import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import { carsData } from '@/constans'
import CartItem from '../CartItem'

const MainOurFilo = () => {
  const [visibleCars, setVisibleCars] = useState(10)
  
  const handleShowMore = () => {
    setVisibleCars(prev => Math.min(prev + 5, carsData.length))
  }

  const handleShowLess = () => {
    setVisibleCars(10)
  }

  return (
    <div>
      <SectionTitle 
        title="Our Fleet" 
        titleTwo="Explore Our Extensive Vehicle Collection" 
        description=""
      />
      <div className='px-4 md:px-6 lg:px-12 2xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mb-8 gap-8 2xl:gap-4'>
        {carsData.slice(25, 25 + visibleCars).map((car, index) => (
          <CartItem car={car} key={index}/>
        ))}
      </div>
      <div className="flex justify-center gap-4 mb-8">
        {visibleCars > 10 && (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
          >
            Show Less
          </button>
        )}
        {visibleCars < carsData.length && (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  )
}

export default MainOurFilo