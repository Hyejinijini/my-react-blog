import React from 'react'

// components
import MetaTags from '@common/components/etc/MetaTags.jsx'
import HomeMain from '@pages/home/components/HomeMain.jsx'

// test
import Test from '@pages/home/components/Test.jsx'

const Home = () => {
  return (
    <div>
      {/* MetaTags 컴포넌트를 사용하여 페이지의 메타 정보를 설정 */}
      <MetaTags subTitle={' | Home'} description={'블로그 메인 페이지입니다.'} keywords={'Home'} />

      <div className="max-w-screen-xl w-full mx-auto">
        {/* 메인 콘텐츠 */}
        <HomeMain />
      </div>

      <Test />
    </div>
  )
}

export default Home
