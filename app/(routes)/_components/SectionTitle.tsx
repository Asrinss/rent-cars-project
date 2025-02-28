'use client'

import { Nerko_One } from 'next/font/google';
import React, { use, useEffect, useRef } from 'react'
import { FaRegSnowflake } from 'react-icons/fa';
import anime from 'animejs/lib/anime.es.js';

const nerkone = Nerko_One({subsets:["latin"], weight:"400"});
// Props için TypeScript interface
interface SectionTitleProps {
  title:string;
  titleTwo:string;
  description:string;
}
const SectionTitle = ({title,titleTwo,description}:SectionTitleProps) => {

  // DOM elementleri için ref'ler
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Scroll animasyonları için intersection handler
    const handleIntersection = (entries:IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
           // Başlık animasyonu
          anime({
            targets: titleRef.current?.querySelectorAll('.title-animated'),
            opacity:[0,1],
            translateY:[20,0],
            duration:1000,
            easing:'easeInOutQuad',
            delay:anime.stagger(400)
          });
          // Açıklama animasyonu
          anime({
            targets:descriptionRef.current?.querySelectorAll('.description-animated'),
            opacity:[0,1],
            translateY:[20,0],
            duration:1000,
            easing:'easeInOutQuad',
            delay:anime.stagger(400)
          });
        }
      });
    }

    // IntersectionObserver oluşturma
    const observer = new IntersectionObserver(handleIntersection,{
      threshold:0.1,
    });
    // Başlık elementi varsa observer'ı takip et
    if (titleRef.current){
      observer.observe(titleRef.current);
    }

    // Cleanup işlemi
    return () =>{
      if(titleRef.current){
        observer.unobserve(titleRef.current);
      }
    };

  },[])
  // JSX içeriği  
  return (
    <div className='container mt-24 mb-4 max-w-5xl'>
        <div className='flex flex-col items-center justify-center text-center' ref={titleRef}>
          <h1 className='text-myprimary  text-base md:text-lg mb-4  md:mb-2 font-semibold flex items-center justify-center title-animated'>
              <FaRegSnowflake/> {title}
          </h1>
          <h1 className={`${nerkone.className}text-xl md:text-4xl lg:text-6xl mb-4 textone font-semibold title-animated`}>{titleTwo}
          </h1>
          <p className='textone font-light text-sm md:text description-animated' ref={titleRef}>{description}</p>
        </div>
    </div>
  )
}

export default SectionTitle