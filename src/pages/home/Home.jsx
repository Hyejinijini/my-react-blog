import React from 'react'

import MetaTags from '@common/components/etc/MetaTags.jsx'
import HomeMain from '@pages/home/components/HomeMain.jsx'

const Home = () => {
  return (
    <div>
      <MetaTags subTitle={' | Home'} description={'블로그 메인 페이지입니다.'} keywords={'Home'} />

      <div className="max-w-screen-xl w-full mx-auto">
        {/* 메인 콘텐츠 */}
        <HomeMain />
      </div>
    </div>
  )
}

export default Home
