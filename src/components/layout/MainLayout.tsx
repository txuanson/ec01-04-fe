import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Hero />
      <Footer />
    </>
  )
}
