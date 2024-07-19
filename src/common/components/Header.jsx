import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-rose-100 text-stone-600 p-4 flex flex-col items-center h-full w-64">
      {/* 블로그 제목 */}
      <h1 className="text-3xl font-bold p-3">HYEHYE</h1>

      {/* 프로필 이미지 */}
      <div className="p-2 flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnofQS0P6zgg_gbUeMaCPPKS7vD1PVGhr0Q&s"
          alt="프로필 이미지"
          className="rounded-full w-40 flex content-center"
        />
      </div>

      {/* 이름 */}
      <span className="text-lg font-bold p-2 text-stone-600">방혜진</span>

      {/* 블로그 설명 */}
      <p className="text-center text-stone-600 pb-10">리액트로 만들어 본 블로그 ╰(*°▽°*)╯</p>

      {/* 네비게이션 링크들 */}
      <div className="flex flex-col justify-around h-full pb-8">
        {/* 홈 링크 */}
        <Link
          to="/"
          className="text-rose-500 hover:text-stone-600 transition-all duration-200 text-xl text-center p-2 hover:text-2xl"
        >
          홈
        </Link>

        {/* 내 소개 링크 */}
        <Link
          to="/about"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          내소개
        </Link>

        {/* 영화 리뷰 링크 */}
        <Link
          to="/movies"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          영화리뷰
        </Link>

        {/* 여행 일기 링크 */}
        <Link
          to="/travel"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          여행일기
        </Link>

        {/* 맛집 탐방 링크 */}
        <Link
          to="/food"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          맛집탐방
        </Link>

        {/* 프로젝트 링크 */}
        <Link
          to="/projects"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          프로젝트
        </Link>

        {/* 연락 수단 링크 */}
        <Link
          to="/contact"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl "
        >
          연락수단
        </Link>

        {/* 연습용 링크 */}
        <Link
          to="/test"
          className="text-stone-600 hover:text-rose-500 transition-all duration-200 text-xl p-2 text-center hover:text-2xl"
        >
          연습용
        </Link>
      </div>
    </header>
  )
}

export default Header
