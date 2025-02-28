'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { sliderData } from '@/constans'
import { FaRegSnowflake } from 'react-icons/fa'
import { Lilita_One } from 'next/font/google'
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Autoplay from "embla-carousel-autoplay"
import MainForm from './MainForm'

const lilita = Lilita_One({subsets:['latin'], weight:"400",})

const MainPage = () => {
  return (
    <div className='relative px-4 md:px-16 rounded-4xl'>
      {/* Otomatik geçişli carousel komponenti */}
      <Carousel  plugins={[Autoplay({delay: 3000,}),]} opts={{align: "start",loop: true,}}>
          <CarouselContent>
              {sliderData.map((slider,index)=>(
                  <CarouselItem key={index} className='relative  h-[600px] md:h-[800px] bg-center rounded-4xl' style={{backgroundImage:`url(${slider.image})`,backgroundSize:'cover', backgroundPosition:"cover"}}>
                    {/* Slide içeriği için karartılmış overlay */}
                      <div className='absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-35 dark:bg-opacity-45 rounded-4xl'>
                        <div className='p-6 max-w-4xl'>
                              {/* Hoşgeldiniz başlığı */}
                              <h1 className='text-myprimary text-lg font-semibold gap-2 flex items-center justify-center'><FaRegSnowflake/>Welcome to LOGO Rent A Car</h1>
                              {/* Ana başlık - özel font ile */}
                              <h1 className={`${lilita.className}text-xl md:text-4xl lg:text-6xl mb-8 text-white font-semibold`}>{slider.label}</h1>
                              {/* Açıklama metni */}
                              <p className='text-base text-white md:text-lg items-center  mb-16 justify-center'>{slider.description}</p>
                              {/* Butonlar için flex container */}
                              <div className='flex flex-row gap-2 md:gap-8 items-center justify-center'>
                                {/* İlk buton - Learn More */} 
                                <div className='flex gap-1'>
                                  <Link href={slider.href}>
                                  <Button variant="mybutton" size="xl">Learn More</Button>                          
                                  </Link>
                                  <Link href={slider.href} className='flex p-4 rounded-full text-2xl text-white bg-myprimary items-center justify-center'>
                                  <FiArrowUpRight/>   
                                  </Link>
                                </div>
                                <div className='flex gap-1'>
                                  <Link href={slider.href}>
                                  <Button className='sliderBtn' size="xl">Booking A Rental</Button>                          
                                  </Link>
                                  <Link href={slider.href} className='flex p-4 rounded-full text-2xl bg-white text-black items-center justify-center'>
                                  <FiArrowUpRight/>   
                                  </Link>
                                </div>
                              </div>
                          </div>

                      </div>
                  </CarouselItem>
              ))}              
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
      </Carousel>
      <MainForm/>
    </div>
  )
}

export default MainPage