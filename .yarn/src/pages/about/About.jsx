import MetaTags from '@common/components/MetaTags'
import SideBar from '@common/components/SideBar.jsx'
import AboutMain from '@pages/about/components/AboutMain.jsx'

const About = () => {
  return (
    <div>
      <MetaTags subTitle={' | About'} description={'블로그 About 페이지입니다.'} keywords={'About'} />

      <div className="max-w-screen-xl w-full mx-auto">
        <div className="flex flex-col xl:ml-10 xl:mr-4 mx-auto lg:mx-auto lg:ml-8 md:ml-6 sm:flex-col md:flex-row max-w-screen-xl">
          {/* 왼쪽 사이드바 */}
          <SideBar />

          {/* 메인 콘텐츠 */}
          <AboutMain />
        </div>
      </div>
    </div>
  )
}

export default About
