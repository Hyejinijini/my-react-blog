import React from 'react'

import Header from '@common/components/Header.jsx'
import Footer from '@common/components/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
