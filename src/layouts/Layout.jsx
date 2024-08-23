import React from 'react'

// commons
import Header from '@common/components/header/Header.jsx'
import SideBar from '@common/components/sidebar/SideBar.jsx'
import Footer from '@common/components/footer/Footer.jsx'

const Layout = ({ children }) => {
  return (
    <div>
      {/* 헤더 */}
      <Header />

      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col md:flex-row xl:ml-10 xl:mr-4 lg:mx-auto lg:ml-8 md:ml-6">
          {/* 사이드바 */}
          <SideBar />
          <main className="flex-1">{children}</main>
        </div>
      </div>

      {/* 푸터 */}
      <Footer />
    </div>
  )
}

export default Layout
