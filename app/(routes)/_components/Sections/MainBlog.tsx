'use client'

import React, { useEffect, useRef } from 'react'
import SectionTitle from '../SectionTitle'
import { blogData } from '@/constans'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import anime from 'animejs/lib/anime.es.js'

const MainBlog = () => {
  // Animasyonlar için ref tanımlamaları
  const mainArticleRef = useRef<HTMLDivElement | null>(null)
  const secondaryArticlesRef = useRef<HTMLDivElement | null>(null)

  // Intersection Observer ve Animasyon ayarları
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: mainArticleRef.current?.querySelectorAll('.main-article-animated'),
            opacity: [0, 1],
            scale: [0.9, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
            delay: anime.stagger(200)
          })
          
          anime({
            targets: secondaryArticlesRef.current?.querySelectorAll('.secondary-article-animated'),
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeInOutQuad',
            delay: anime.stagger(200)
          })
        }
      })
    }

    // Observer kurulumu
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '50px'
    })

    if (mainArticleRef.current && secondaryArticlesRef.current) {
      observer.observe(mainArticleRef.current)
      observer.observe(secondaryArticlesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className='container mx-auto mb-20 px-4 py-12'>
      {/* Başlık Bölümü */}
      <div className="mb-16">
        <SectionTitle 
          title="Latest Articles" 
          titleTwo="Stay Informed and Get Inspired for Your Next Journey" 
          description=""
        />
      </div>

      <div className='flex flex-col lg:flex-row items-start justify-between gap-12'>
        {/* Main Article Section */}
        <div className='w-full lg:w-3/5 relative group mb-8 lg:mb-0 hover:transform hover:scale-[1.02] transition-all duration-300' 
             ref={mainArticleRef}>
          {blogData.slice(0, 1).map((blog, index) => (
            <div key={index} 
                 className='relative overflow-hidden rounded-3xl w-full h-[500px] lg:h-[690px] main-article-animated shadow-xl'>
              <Image 
                alt={blog.title} 
                src={blog.image} 
                width={800} 
                height={900} 
                className='rounded-3xl object-cover w-full h-full transform hover:scale-110 transition-transform duration-700'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent group-hover:opacity-75 transition-all duration-500'></div>
              
              <div className='absolute bottom-8 left-8 right-8 text-white'>
                <div className='flex items-center gap-3 mb-4'>
                  <Calendar className="w-5 h-5 text-myprimary"/>
                  <span className="text-sm font-medium">{blog.date}</span>
                </div>
                <h3 className='font-bold text-2xl mb-4 group-hover:text-myprimary transition-colors duration-300'>
                  {blog.title}
                </h3>
                <Link 
                  href={blog.href} 
                  className='inline-flex items-center gap-2 bg-myprimary px-6 py-3 rounded-full text-white hover:bg-white hover:text-myprimary transition-all duration-300'
                >
                  Read More 
                  <FiArrowUpRight className='w-5 h-5 group-hover:rotate-45 transition-transform duration-300'/>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Articles Section */}
        <div className='w-full lg:w-2/5 space-y-8' ref={secondaryArticlesRef}>
          {blogData.slice(1, 4).map((blog, index) => (
            <div key={index} 
                 className='group hover:bg-gray-50 p-4 rounded-2xl transition-all duration-300 secondary-article-animated'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='relative w-full md:w-1/2 overflow-hidden rounded-2xl h-60'>
                  <Image 
                    alt={blog.title} 
                    src={blog.image} 
                    width={400} 
                    height={300} 
                    className='rounded-2xl object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-75 transition-all duration-300'></div>
                </div>

                <div className='w-full md:w-1/2 flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center gap-2 mb-3'>
                      <Calendar className="w-4 h-4 text-myprimary"/>
                      <span className="text-sm text-gray-600">{blog.date}</span>
                    </div>
                    <h4 className='font-semibold text-lg mb-3 group-hover:text-myprimary transition-colors duration-300'>
                      {blog.title}
                    </h4>
                  </div>
                  <div className='flex items-center gap-3'>
                    <span className='text-sm font-medium text-myprimary'>Read Story</span>
                    <Link 
                      href={blog.href} 
                      className='flex items-center justify-center w-10 h-10 rounded-full bg-myprimary text-white group-hover:bg-white group-hover:text-myprimary border border-transparent group-hover:border-myprimary transition-all duration-300'
                    >
                      <FiArrowUpRight className='w-5 h-5 group-hover:rotate-45 transition-transform duration-300'/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainBlog