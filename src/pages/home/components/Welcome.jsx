import React from 'react'

const Welcome = ({ welcome = '전체 글', description = 'HYEHYE 블로그 (๑•̀ㅂ•́)و✧.' }) => (
  <div
    className="relative h-80 flex items-center justify-center bg-rose-300" // 배경색을 회색으로 설정 (배경 이미지 제거)
  >
    {/* 중앙에 위치한 텍스트 블록 */}
    <div className="relative text-center text-white z-10 px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{welcome}</h1>
      <p className="text-lg">{description}</p>
    </div>
  </div>
)

export default Welcome
