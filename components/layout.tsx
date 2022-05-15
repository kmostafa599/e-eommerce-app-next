import React from 'react'
import Footer from './footer'
import Header from './header'

type props = {
  children: React.ReactNode
}
function Layout({ children }: props) {
  return (
    <div className="min-h-screen py-2">
      <div className="bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
