// Gerekli importlar
import React from 'react'                                    // React kütüphanesi
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"                              
import { CarProps } from '@/constans'                       
import Image from 'next/image'                              
import { Badge } from '@/components/ui/badge';             
import { FaUsers } from 'react-icons/fa';                   
import { GiCarDoor, GiDiscGolfBag } from 'react-icons/gi'; 
import { TbAutomaticGearbox } from 'react-icons/tb';       
import Link from 'next/link';                              
import { FiArrowUpRight } from 'react-icons/fi';           
import { MdOutlineGpsFixed } from "react-icons/md";
// Props tipi tanımı
interface CarItemProps {                                    
    car: CarProps;                                         
}

// CartItem komponenti
const CartItem = ({ car }: CarItemProps) => {              
  return (
    <Card className='w-full rounded-3xl cardBg group'>     
      <CardHeader>                                       
        <Image 
          width={500} 
          height={300} 
          alt={car.name} 
          src={car.imageUrl}
        />                                              
      </CardHeader>
      
      <CardContent>                                       
        <div>
          <Badge variant="secondary" className='px-6 py-3'> 
            {car.type}
          </Badge>
          
          <div className='mt-4'>
            <h2 className='line-clamp-1 font-semibold text-xl'> 
              {car.name} {car.year}
            </h2>
          
            <div className='grid grid-cols-2 mt-8 gap-y-2 gap-x-4'> 
              <div className="flex items-center cardText gap-1"> 
                <FaUsers/><span>{car.passengers} passenger</span>
              </div>
              <div className="flex items-center cardText gap-1"> 
                <GiCarDoor/><span>{car.doors} door</span>
              </div>
              <div className="flex items-center cardText gap-1"> 
                <GiDiscGolfBag/><span>{car.bags}</span>
              </div>
              <div className="flex items-center cardText gap-1"> 
                <TbAutomaticGearbox/><span>{car.transmission}</span>
              </div>
              <div className="flex items-center cardText gap-1"> 
              <MdOutlineGpsFixed /><span>{car. GPS}GPS</span>
              </div>
              
            </div>
          </div>
          <div className='border-b mt-8'></div>            
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">        
        <p>                                                
          <span className='font-semibold text-3xl'>
            ${car.pricePerDay}/
          </span>
          day
        </p>
        <Link                                             
          href="/" 
          className='flex p-4 rounded-full text-2xl text-white bg-myprimary items-center justify-center'
        >
          <FiArrowUpRight                                  
            className='transition-transform duration-500 transform group-hover:rotate-45'
          />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CartItem  