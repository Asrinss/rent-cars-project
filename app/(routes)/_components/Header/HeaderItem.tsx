import { HeaderDataProps } from '@/constans'
import { Inter } from 'next/font/google';
import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

const inter = Inter({subsets: ["latin"], weight:"100"});

const HeaderItem = ({ href, label }: HeaderDataProps) => {
  return (
    <Link href={href} className={clsx('font-semibold hover:text-myprimary transition duration-500')}>
      {label}
    </Link>
  )
}

export default HeaderItem