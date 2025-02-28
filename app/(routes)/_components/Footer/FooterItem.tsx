import { FooterItemDataProps } from '@/constans'
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

const FooterItem = ({items, title}:FooterItemDataProps) => {
  return (
    <div className='w-full md:w-auto'>
        <h3 className='font-semibold text-white text-2xl'>{title}</h3>
        <ul className='mt-4 space-y-2'>
            {items.map((item, index) => (
                <li key={index}><Link href={item.href} className={clsx("text-white hover:text-myprimary duration-500 transition")}>{item.label}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterItem