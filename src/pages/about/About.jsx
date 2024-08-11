import MetaTags from '@common/components/etc/MetaTags'
import AboutMain from '@pages/about/components/AboutMain.jsx'

const About = () => {
  return (
    <div>
      <MetaTags subTitle={' | About'} description={'블로그 About 페이지입니다.'} keywords={'About'} />

      <div className="max-w-screen-xl w-full mx-auto">
        {/* 메인 콘텐츠 */}
        <AboutMain />
      </div>
    </div>
  )
}

export default About
