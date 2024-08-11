import React from 'react'
import Header from '@common/components/Header.jsx'
import SideBar from '@common/components/SideBar.jsx'
import Footer from '@common/components/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col md:flex-row xl:ml-10 xl:mr-4 lg:mx-auto lg:ml-8 md:ml-6">
          <SideBar />
          <main className="flex-1">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
