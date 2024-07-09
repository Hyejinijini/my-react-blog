import React from 'react'

import Header from '@common/components/Header.jsx'
import Footer from '@common/components/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
