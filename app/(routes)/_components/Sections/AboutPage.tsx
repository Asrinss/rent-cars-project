'use client';

// Gerekli kütüphanelerin import edilmesi
import React, { useEffect, useRef } from 'react'; // React ve gerekli hook'lar
import SectionTitle from '../SectionTitle'; // Başlık komponenti
import Image from 'next/image'; // Optimize edilmiş resim komponenti
import { logoData, personData, missionData, testimonialsData } from '@/constans'; // Veri dosyaları
import { FaFacebookF, FaLinkedin, FaTwitter, FaRegSnowflake, FaStar } from 'react-icons/fa'; // Sosyal medya ve diğer ikonlar
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Tab komponentleri
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Carousel komponentleri
import Autoplay from "embla-carousel-autoplay"; // Carousel otomatik oynatma
import { FaCar } from "react-icons/fa";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import anime from 'animejs/lib/anime.es.js';

const AboutPage = () => {
  const logosRef = useRef<HTMLDivElement | null>(null); // Logo container'ı için referans

  useEffect(() => {
    // Scroll animasyonları için Intersection Observer
    const handleIntersection = (entries:IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          // Logo animasyonlarını başlat
          anime({
            targets: '.logo-animated',
            opacity:[0,1], // Görünmezden görünüre
            translateY:[50,0], // Aşağıdan yukarı hareket
            duration:800, // Animasyon süresi
            easing:'easeInOutQuad', // Animasyon tipi
            delay:anime.stagger(150) // Logolar arası gecikme
          });
        }
      });
    }

    // Observer'ı oluştur ve yapılandır
    const observer = new IntersectionObserver(handleIntersection,{
      threshold:0.1, // Görünürlük eşiği
      rootMargin:'50px', // Gözlem marjı
    });

    // Logo container'ını gözlemeye başla
    if (logosRef.current){
      observer.observe(logosRef.current);
    }     
    
    // Cleanup fonksiyonu
    return () => {
      observer.disconnect();
    };
  },[]);

  return (
    <div className="space-y-12"> {/* Ana container */}
      {/* Hero Section */}
      <div className='container mt-20'>
        <div className='bgone flex flex-col md:flex-row items-center justify-center gap-16'>
          {/* Sol taraf - Resim */}
          <div className='w-full md:w-1/2'>
            <Image src="/about/2.jpg" alt='' width={500} height={600} className='object-cover'/>
          </div>
          {/* Sağ taraf - İçerik */}
          <div className='w-full md:w-1/2'>
            <h1 className='text-myprimary text-base md:text-lg mb-4 flex font-semibold items-center'>
              <FaRegSnowflake/>About us
            </h1>
            <p>At LOGO, we are dedicated to providing a seamless and exceptional car rental experience. 
              Our goal is to offer reliable, high-quality vehicles that cater to every customer’s needs, whether for business trips, family vacations, or weekend getaways.</p>
            {/* İlk özellik kartı */}
            <div className='flex flex-row h-36 mt-14 gap-4'>
              <div><FaCar className='w-20 h-20'/></div>
              <div>
                <h2 className='text-xl font-semibold'>Innovative and Reliable Service</h2>
                <p className='text-sm font-light'>We leverage the latest technology and industry expertise to ensure a smooth rental process from start to finish.</p>
              </div>
            </div>
            {/* İkinci özellik kartı */}
            <div className='flex flex-row h-36 gap-4 mt-14'>
              <div><HiMiniWrenchScrewdriver className='w-20 h-20'/></div>
              <div>
                <h2 className='text-xl font-semibold'>Quality and Maintenance</h2>
                <p className='text-sm font-light'>Every vehicle in our fleet undergoes rigorous maintenance and inspection, guaranteeing a safe and comfortable ride.</p>
              </div>
            </div>
            {/* üçüncü özellik kartı */}
            <div className='flex flex-row h-36 gap-4 mt-14'>
              <div><MdBusinessCenter className='w-20 h-20'/></div>
              <div>
                <h2 className='text-xl font-semibold'>Customer-Centric Approach</h2>
                <p className='text-sm font-light'>Your satisfaction is our priority. Our friendly and professional team is always ready to assist you, making your journey hassle-free.</p>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className='relative px-4 md:px-16 rounded-4xl mt-12'>
        <div className='absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-40 dark:opacity-10'></div>
        <div className='serviceBg rounded-4xl pt-8 pb-20'>
          <SectionTitle title="Executive Partners" titleTwo='Trusted by leading brands' description={''} />
          <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8' ref={logosRef}>
            {/* Logo kartları */}
            {logoData.map((logo, index) => (
              <div key={index} className='rounded-3xl bgone group p-8 logo-animated'>
                <Image alt='' src={logo.image} width={250} height={50} />
                <div className='flex flex-row mt-8'></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className='relative px-4 md:px-16 rounded-4xl mt-12'>
        <div className='absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-40 dark:opacity-10'></div>
        <div className='serviceBg rounded-4xl pt-8 pb-20'>
          <SectionTitle title="Executive Partners" titleTwo='Trusted by leading brands' description={''} />
          <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Ekip üyesi kartları */}
            {personData.map((person, index) => (
              <div key={index} className='rounded-3xl relative group overflow-hidden'>
                <Image alt='' src={person.image} width={525} height={640} 
                  className='w-full h-full object-cover transform transition-transform duration-500 brightness-75 group-hover:brightness-100 group-hover:scale-110' />
                {/* Sosyal medya ikonları */}
                <div className='absolute bottom-0 bg-myprimary left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 translate-opacity duration-500 *:transform group-hover:translate-y-0 translate-y-4'>
                  <FaFacebookF className='text-white text-2xl' />
                  <FaTwitter className='text-white text-2xl' />
                  <FaLinkedin className='text-white text-2xl' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision/Mission Section */}
      <div className='w-full'>
        <SectionTitle title='Vision Mission' titleTwo='Driving excellence and innovation in car rental services' description={''} />
        <div className='flex items-center justify-center w-full mb-20'>
          <Tabs defaultValue="vision" className="w-full">
            {/* Tab başlıkları */}
            <TabsList className='flex justify-center container'>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>             
            </TabsList>
            {/* Tab içerikleri */}
            {missionData.map((item, index) => (
              <TabsContent value={item.keys} key={index} className='w-full relative container'>
                <div className='w-full flex flex-col md:flex-row items-center justify-center rounded-4xl space-y-6 md:space-y-0 md:space-x-6'>
                  {/* Sol taraf - İçerik */}
                  <div className='w-full md:w-2/3'>
                    <div className='flex flex-col space-y-5 p-4'>
                      <h1 className='text-myprimary text-lg md:text-xl mb-4 font-semibold flex items-center justify-center'>
                        <FaRegSnowflake className='mr-2' /> {item.title}
                      </h1>
                      <p className='text-base md:text-lg'>At LOGO, our vision is to transform the way people travel by offering innovative and reliable car rental solutions. 
                        Our mission is to provide customers with reliable, convenient, and high-quality car rental services that ensure a smooth and enjoyable journey. 
                         We take a customer-first approach to everything we do, focusing on providing top-tier vehicles and exceptional customer service. 
                        From business trips to weekend getaways, we aim to redefine travel with a fleet of vehicles that meet every need. 
                        With an emphasis on innovation, quality, and customer satisfaction, we are committed to delivering an unforgettable experience on every journey.</p>
                      {/* Özellik listesi */}
                      
                    </div>
                  </div>
                  {/* Sağ taraf - Resim */}
                  <div className='w-full md:w-1/3 relative shadow-lg overflow-hidden group'>
                    <Image alt='' src={item.image} width={565} height={678} 
                      className="w-full object-cover transform transition-transform duration-500 group-hover:scale-110" />
                    <div className='absolute inset-0 bg-black opacity-55 group-hover:opacity-35'></div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className='mb-20'>
        <SectionTitle title="Testimonials" titleTwo="What our customers say" description={''} />
        <div className='px-4 md:px-6 lg:px-12 2xl:px-20'>
          {/* Otomatik kayan carousel */}
          <Carousel opts={{ align: "start", loop: true }} plugins={[Autoplay({ delay: 2000 })]}>
            <CarouselContent className="-ml-4">
              {/* Müşteri yorumları */}
              {testimonialsData.slice(0, 10).map((testimonial, index) => (
                <CarouselItem key={index} className="basis-1/1 md:basis-1/3">
                  <Image alt={testimonial.author} src={testimonial.image} width={100} height={100} 
                    className='rounded-full mb-4' />
                  {/* Yıldız değerlendirmesi */}
                  <div className='flex'>
                    {Array.from({ length: testimonial.stars }).map((_, starIndex) => (
                      <FaStar key={starIndex} className='text-yellow-500' />
                    ))}
                  </div>
                  <p className='textone mt-4'>{testimonial.comment}</p>
                  <p className='textone font-bold mt-4'>{testimonial.author}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Carousel kontrolleri */}
            <div className='relative flex justify-between mt-12 mb-12'>
              <CarouselPrevious className='carouselPrev' />
              <CarouselNext className='carouselNext' />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;