import React from 'react'

import Header from '@common/components/Header.jsx'
// import Footer from '@common/components/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex h-screen">
        <Header />
        <main className="flex-grow overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}

export default Layout
