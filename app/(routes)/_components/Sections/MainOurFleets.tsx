// Client-side rendering için gerekli direktif
'use client'

// Gerekli importlar
import React, { useEffect, useState } from 'react'
import SectionTitle from '../SectionTitle'
import { carsData } from '@/constans'
import CartItem from '../CartItem'

// Carousel (kaydırmalı galeri) komponenti ve ilgili parçaları
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Otomatik oynatma özelliği için eklenti
import Autoplay from "embla-carousel-autoplay"

  const MainOurFleets = () => {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
    
  return (
    <div>
        {/* Başlık Bölümü */}
        <SectionTitle title="Our Fleet" titleTwo="Discover Our Wide Range of Premium Vehicles" description=""/>
        {/* Carousel Container */}
        <div className='px-4 md:px-6 lg:px-12 2xl:px-20'>
          {/* Carousel Komponenti 
              - opts: Carousel ayarları (başlangıç hizalaması ve sonsuz döngü)
              - plugins: Otomatik oynatma (2 saniye gecikme ile) */}
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}  
            plugins={[
              Autoplay({delay: 2000,}),
            ]}
          >
            {/* Carousel İçeriği */}


          {isClient && carsData?.length > 0 && (
            <CarouselContent className="ml-0">                                
              {carsData.slice(0, 10).map((car, index) => (
                <CarouselItem 
                  key={car.id || index}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <CartItem car={car} />
                </CarouselItem>              
              ))}
            </CarouselContent>
          )}

            {/* Navigasyon Butonları */}
            <div className='relative flex justify-between mt-12 mb-12'>
              <CarouselPrevious className='carouselPrev'/> {/* Önceki butonu */}
              <CarouselNext className='carouselNext' />     {/* Sonraki butonu */}
            </div>
          </Carousel>
        </div>
    </div>
  );
};

export default MainOurFleets;