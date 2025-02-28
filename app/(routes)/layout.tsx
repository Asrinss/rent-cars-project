import React from 'react'
import Footer from './_components/Footer/Footer'
import Header from './_components/Header/Header'

interface RootLayoutProps {
    children: React.ReactNode
}
const RouterLayout = ({children}:RootLayoutProps) => {
  return (
    <div>
        <Header/>
        <div className="min-h-screen">
          {children}
          
        </div>      
        <Footer/>
    </div>
  )
}

export default RouterLayout