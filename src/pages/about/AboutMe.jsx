import React from 'react'
import '@assets/styles/css/AboutMe.css' // 사용자 정의 CSS 파일 import
import MetaTags from '@common/components/MetaTags'

const AboutMe = () => {
  return (
    <div className="gamja-flower-regular flex flex-col items-center min-h-screen bg-rose-50 p-6 pt-14">

      <MetaTags subTitle={' | 내 소개'} description={'나를 소개하는 페이지입니다.'} keywords={'자기소개, 취미'} />

      <div className="flex flex-col space-y-8 border-">
        <div className="flex items-center space-x-8">
          <div className="polaroid relative">
            <img src="src/assets/images/프로필.jpg" alt="프로필 사진" className="polaroid-image" />
            <div className="absolute -top-8 -left-14">
              <img
                className="w-24 h-24 object-cover"
                src="https://media-public.canva.com/23PTk/MAFQIE23PTk/1/t.png"
                alt="aesthetic washi tape"
              />
            </div>
          </div>
          <div className="intro-text text-right">
            <h1 className="text-5xl font-bold text-gray-700 py-8">안녕하세요 ♪(´▽｀)</h1>
            <p className="text-7xl text-gray-700">저는 방혜진</p>
            <p className="text-7xl text-gray-700">입니다</p>
            <p className="text-4xl text-rose-400 py-8">2001/08/13</p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="intro-text-left text-left">
            <h1 className="text-5xl font-bold text-gray-700 py-8">About Me</h1>
            <p className="text-4xl text-rose-400">
              정보통신공학과를 졸업한 후 개발과는 다른 분야에서 근무하던 중, 개발자분들의 협업 하는 과정에서 사용자
              경험을 개선하고, 직관적인 인터페이스를 설계하는 모습을 보고 웹 개발에 관심을 가지게 되었습니다. 현재는
              프론트엔드 개발자로서의 목표를 세우고, 이를 달성하기 위해 열심히 공부하고 있습니다. (๑•̀ㅂ•́)و✧
            </p>
          </div>
          <div className="polaroid-right">
            <img src="src/assets/images/내소개사진1.jpg" alt="내소개사진" className="polaroid-image" />
          </div>
        </div>
        <div className="flex items-center space-x-8 py-8">
          <div className="polaroid-left">
            <img src="src/assets/images/영종도여행_썸네일.jpg" alt="취미생활사진" className="polaroid-image" />
          </div>
          <div className="intro-text-right text-right">
            <h1 className="text-5xl font-bold text-gray-700 py-8">Hobby</h1>
            <p className="text-4xl text-rose-400">
              친구들이랑 여행다니는 걸 제일 좋아합니다. 개인적으로 제일 좋았던 여행지는 부산이에요. 아직 해외여행은 가본
              적 없지만 시간적 여유가 생기면 해외여행도 다녀보고 싶어요!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
