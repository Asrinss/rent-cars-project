import React from 'react'

interface SectionBgProps {
    title:string;
    source:string;
}

const SectionBg = ({ title }:SectionBgProps) => {
  return (
    <div className='px-4 md:px-16 rounded-4xl'>
        <div className='relative'>
            <div className='px-4 md:px-16 rounded-4xl absolute inset-0 bg-section-bg bg-cover bg-center'></div>
            <div className='absolute inset-0 bg-black opacity-55 rounded-55 rounded-4xl duration-500'></div>
            <div className='relative z-10 p-8 md:p-16 lg:p-24 text-white'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-center'>{title}</h1>
                <nav className='text-sm md:text-base lg:text-2xl'></nav>
            </div>
        </div>
    </div>
  )
}

export default SectionBg