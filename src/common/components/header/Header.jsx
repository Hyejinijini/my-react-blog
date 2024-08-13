import React from 'react'

import BlogTitle from '@common/components/header/BlogTitle.jsx'
import Logo from '@common/components/header/Logo.jsx'
import HeaderList from '@common/components/header/HeaderList.jsx'

const Header = () => {
  return (
    <header className="text-gray-600 bg-rose-50 border-b border-b-rose-200">
      <div className="flex p-4 pb-2 gap-3 items-center">
        <div className="flex gap-2 w-full items-center">
          {/* 로고 부분 */}
          <Logo className="w-12 h-12" />

          {/* 블로그 제목 부분 */}
          <BlogTitle className="text-md font-bold hover:bg-rose-100 hover:rounded-md py-1.5 -my-2 text-start w-full lg:w-auto flex items-center" />
        </div>
      </div>

      {/* 카테고리 부분 */}
      <HeaderList />
    </header>
  )
}

export default Header
