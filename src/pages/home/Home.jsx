import React from 'react'

import MetaTags from '@common/components/MetaTags.jsx'
import SideBar from '@common/components/SideBar'
import ReadMe from '@pages/home/components/ReadMe.jsx'

const Home = () => {
  return (
    <div>
      <MetaTags subTitle={' | Home'} description={'블로그 메인 페이지입니다.'} keywords={'Home'} />

      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col xl:ml-10 xl:mr-4 mx-auto lg:mx-auto lg:ml-8 md:ml-6 sm:flex-col md:flex-row max-w-screen-xl">
          {/* 왼쪽 사이드바 */}
          <SideBar />

          {/* 메인 콘텐츠 */}
          <ReadMe />
        </div>
      </div>
    </div>
  )
}

export default Home
