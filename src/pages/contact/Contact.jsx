import React from 'react'
import { FaGithub, FaBlog, FaHome } from 'react-icons/fa' // GitHub, 블로그, 홈 아이콘 임포트
import { Link } from 'react-router-dom' // Link 컴포넌트 임포트
import MetaTags from '@common/components/MetaTags.jsx'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50">
      <MetaTags subTitle={' | 연락 수단'} description={'Contact 페이지입니다.'} keywords={'contact, github, blog'} />

      {/* Contact 텍스트 */}
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      {/* 링크 */}
      <div className="flex flex-row space-x-4 text-4xl">
        <MetaTags subTitle={' | 연락 수단'} description={'Contact 페이지입니다.'} keywords={'contact, github, blog'} />

        {/* 홈 아이콘 링크: Link 컴포넌트를 사용하여 홈으로 이동 */}
        <Link to="/" className="text-gray-700 hover:text-rose-500 hover:scale-125 transition-transform duration-300">
          <FaHome className="w-8 h-8" />
        </Link>

        {/* GitHub 아이콘 링크 */}
        <a
          href="https://github.com/Hyejinijini"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-rose-500 hover:scale-125 transition-transform duration-300"
        >
          <FaGithub className="w-8 h-8" />
        </a>

        {/* 블로그 아이콘 링크 */}
        <a
          href="https://hye-story-o0o.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-rose-500 hover:scale-125 transition-transform duration-300"
        >
          <FaBlog className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}

export default Contact
