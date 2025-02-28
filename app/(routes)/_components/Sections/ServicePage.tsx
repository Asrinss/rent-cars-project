'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import anime from 'animejs/lib/anime.es.js';
import Autoplay from 'embla-carousel-autoplay';

import SectionTitle from '../SectionTitle';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import {
  accordionData,
  servicesData,
  testimonialsData,
  whyChooseUsData,
} from '@/constans';

const ServicePage = () => {
  const servicesRef = useRef<HTMLDivElement>(null); // Animasyonlar için referanslar
  const descriptionRef = useRef<HTMLDivElement>(null);

  // Animasyon ayarlari
  const animationConfig = {
    opacity: [0, 1], 
    translateY: [20, 0],
    duration: 1000,
    easing: 'easeInOutQuad',
    delay: anime.stagger(200),
  };

  // Görünürlük izleyici ve animasyon tetikleyici
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
       
          if (servicesRef.current) {
            anime({
              targets: servicesRef.current.querySelectorAll('.service-animated'),
              ...animationConfig,
            });
          }

          
          if (descriptionRef.current) {
            anime({
              targets: descriptionRef.current.querySelectorAll('.description-animated'),
              ...animationConfig,
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    // Observe elements
    [servicesRef, descriptionRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Hizmet kartlarını render eder
  const renderServiceCard = (service: any, index: number) => (
    <div key={index} className="rounded-3xl bgone group p-8 service-animated">
      <Image alt={service.title} src={service.image} width={70} height={70} />
      <div className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold">{service.title}</h2>
        <p className="text-xs">{service.description}</p>
      </div>
      <div className="flex flex-row mt-8">
        <Link
          href="/"
          className="flex p-4 rounded-full text-2xl text-white bg-myprimary items-center justify-center"
        >
          <FiArrowUpRight className="transition-transform duration-500 transform group-hover:rotate-45" />
        </Link>
      </div>
    </div>
  );

  // Özellik öğelerini render eder
  const renderFeatureItem = (item: any) => (
    <div key={item.id} className="flex items-start gap-4">
      <div className="bg-myprimary p-4 rounded-full">
        <Image src={item.icon} alt={item.title} width={70} height={70} className="w-16 h-auto" />
      </div>
      <div className="text-left">
        <h4 className="text-xl font-semibold">{item.title}</h4>
        <p className="font-light">{item.description}</p>
      </div>
    </div>
  );

  // Müşteri yorumlarını render eder
  const renderTestimonialCard = (testimonial: any, index: number) => (
    <CarouselItem key={index} className="basis-1/1 md:basis-1/3">
      <Image
        alt={testimonial.author}
        src={testimonial.image}
        width={100}
        height={100}
        className="rounded-full mb-4"
      />
      <div className="flex">
        {[...Array(testimonial.stars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
      </div>
      <p className="textone mt-4">{testimonial.comment}</p>
      <p className="textone font-bold mt-4">{testimonial.author}</p>
      <p className="textone mt-2">{testimonial.location}</p>
      <p className="textone mt-2">
        {new Date(testimonial.date).toLocaleDateString()}
      </p>
    </CarouselItem>
  );

  return (
    <div>
      {/* Hizmetler Bölümü */}
      <div className="relative px-4 md:px-16 rounded-4xl mt-12">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-service-bg opacity-40 dark:opacity-10" />
        <div className="serviceBg rounded-4xl pt-8 pb-20">
          <SectionTitle
            title="our services"
            titleTwo="Explore our wide range of rental services"
            description=""
          />
          <div
            ref={servicesRef}
            className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesData.map(renderServiceCard)}
          </div>
        </div>
      </div>

      {/* Neden Bizi Seçmelisiniz Bölümü */}
      <section className="py-16 bgone">
        <div className="container mx-auto text-center">
          <SectionTitle
            title="why choose us"
            titleTwo="Unmatched Quality and Service for Your Needs"
            description=""
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-8">
              {whyChooseUsData.slice(2, 4).map(renderFeatureItem)}
            </div>
            <div className="flex justify-center">
              <Image
                alt="About us"
                src="/about/1.jpg"
                width={500}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-8">
              {whyChooseUsData.slice(0, 2).map(renderFeatureItem)}
            </div>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları Bölümü */}
      <div className="mb-20">
        <SectionTitle
          title="Testimonials"
          titleTwo="What our customers say"
          description=""
        />
        <div className="px-4 md:px-6 lg:px-12 2xl:px-20">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 2000 })]}
          >
            <CarouselContent className="-ml-4">
              {testimonialsData.slice(0, 10).map(renderTestimonialCard)}
            </CarouselContent>
            <div className="relative flex justify-between mt-12 mb-12">
              <CarouselPrevious className="carouselPrev" />
              <CarouselNext className="carouselNext" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* SSS Bölümü */}
      <div className="container mt-20">
        <div className="bgone flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="w-full md:w-1/2">
            <Image
              src="/about/3.png"
              alt="FAQ illustration"
              width={500}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Accordion type="single" collapsible className="w-full">
              {accordionData.map((item, index) => (
                <AccordionItem value={item.value} key={index}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;