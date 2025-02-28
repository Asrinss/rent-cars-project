'use client'

import { mainTypesCar } from '@/constans'
import React, { useEffect, useRef, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import anime from 'animejs/lib/anime.es.js'

// Animasyon konfigürasyonunu ayrı bir obje olarak tanımla
const ANIMATION_CONFIG = {
  opacity: [0, 1],
  translateY: [20, 0],
  duration: 1000,
  easing: 'easeInOutQuad',
  delay: anime.stagger(200, { start: 500 })
} as const

// CarTypeCard'ı memoize et
const CarTypeCard = memo(({ car }: { car: typeof mainTypesCar[0] }) => (
  <div className='relative w-[230px] rounded-xl shadow-lg overflow-hidden group image-animated hover:shadow-xl transition-shadow duration-300'>
    <Image
      src={car.image}
      alt={car.type}
      width={565}
      height={678}
      className='w-full h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-110'
      priority={true}
    />
    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:opacity-30 duration-500' />
    <div className='absolute top-4 left-4 text-white text-lg font-bold z-10'>{car.type}</div>
    <div className='absolute bottom-4 right-4 z-10'>
      <Link 
        href={`/cars?type=${encodeURIComponent(car.type)}`} 
        className='flex p-4 rounded-full text-2xl text-white bg-myprimary items-center justify-center hover:bg-myprimary/90 transition-colors'
      >
        <FiArrowUpRight className='transition-transform duration-500 transform group-hover:rotate-45' />
      </Link>
    </div>
  </div>
))

CarTypeCard.displayName = 'CarTypeCard'

const MainTypes = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: containerRef.current?.querySelectorAll('.image-animated'),
            ...ANIMATION_CONFIG
          })
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className='flex justify-center items-center bgone p-4 mt-16' ref={containerRef}>
      <div className='flex flex-nowrap gap-6 max-w-full overflow-x-auto pb-4 px-4 snap-x snap-mandatory'>
        {mainTypesCar.map((car) => (
          <div key={car.type} className='flex-none snap-center'> 
            <CarTypeCard car={car}/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default memo(MainTypes)