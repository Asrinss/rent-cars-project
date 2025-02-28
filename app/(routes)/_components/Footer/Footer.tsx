import { footerData, SocialMediaData } from '@/constans' 
import React from 'react'
import FooterItem from './FooterItem'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaEnvelope } from 'react-icons/fa'
import clsx from 'clsx'

// Footer bileşenini oluşturuyoruz
const Footer = () => {
  return (
     // Ana container - sayfa kenarlarından padding ve alt margin
    <div className='px-6 md:px-16 mb-8'>
      {/* Footer ana bölümü - koyu arka plan ve yuvarlak köşeler */}
      <footer className='relative py-8 px-6 md:px-8 bg-myDark-100 text-white rounded-[3rem] overflow-hidden'>
         {/* Arka plan deseni - opacity ile şeffaf hale getirilmiş */}
        <div className='absolute inset-0 bg-center bg-no-repeat bg-footer-bg opacity-10'></div>
        {/* İçerik container'ı */}
        <div className='container mx-auto px-4 py-8 md:py-12 relative z-10'>
          {/* Grid yapısı - responsive kolonlar */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16'>
            {/* Logo ve açıklama bölümü */}
            <div className='w-full lg:col-span-2'>
              <h1 className='text-2xl md:text-3xl font-semibold text-myprimary'>LOGO</h1>
              <p className='mt-4 text-sm'>
                Experience seamless car rentals with top-quality vehicles and exceptional service.  
                Whether you are planning a road trip or need a ride for business, we have got you covered.  
              </p>
            </div>

            {/* Footer menü öğeleri - footerData'dan map ile oluşturuluyor */}
            {footerData.map((section, index) => (
              <FooterItem items={section.items}  title={section.title} key={index}  />
            ))}
            {/* Bülten aboneliği bölümü */}
            <div className='lg:col-span-2'>
              <h1 className='font-semibold text-white text-2xl'>subscribe to the newsletter</h1>
              {/* Email input ve gönder butonu */}
              <div className='flex flex-row relative'>
                <Input placeholder='email...' className={clsx('text-white placewhite right-0 ring-trasparent py-6 rounded-full max-w-60 b bg-mysecondary dark:bg-mysecondary mt-4')} />
                <Button variant="mybutton" className='absolute top-5 rounded-full left-48'><FaEnvelope/></Button>
              </div>
            </div>

          </div>
          <div className='border border-opacity-10 border-white mt-4'></div>
          {/* En alt bölüm - telif hakkı ve sosyal medya ikonları */}
          <div className='flex flex-col lg:flex-row items-center justify-between mt-4'>           
            <div>
              @ 2024 logo. All rights reserved.
            </div>           
            <div className='flex flex-row space-x-4 mt-4 lg:mt-0'>
              {SocialMediaData.map((item, index) => (
                <div key={index} className='border-2 p-2 rounded-full items-center justify-center hover:text-myprimary hover:border-myprimary duration-500 transition'><item.icon className="text-xl"/></div>

              ))}
            </div>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default Footer