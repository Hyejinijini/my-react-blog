import React from 'react'

import DropdownButton from '@common/components/header/DropdownButton.jsx'
import CalendarModal from '@common/components/header/CalendarModal.jsx'
import BlogTitle from '@common/components/header/BlogTitle.jsx'
import HeaderList from '@common/components/header/HeaderList.jsx'

const Header = () => {
  return (
    <header className="text-gray-600 bg-rose-50 border-b border-b-rose-200">
      <div className="flex p-4 pb-2 gap-3 items-center">
        <div className="flex gap-2 w-full items-center">
          <div className="ml-1">
            <img src="/HYEHYE.svg" alt="로고 이미지" className="w-12 h-12" />
          </div>
          <BlogTitle />
        </div>

        <div className="flex gap-2">
          <DropdownButton />
          <CalendarModal />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnofQS0P6zgg_gbUeMaCPPKS7vD1PVGhr0Q&s"
            alt="프로필 이미지"
            className="max-w-none box-border border border-rose-100 w-8 h-8 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>

      <HeaderList />
    </header>
  )
}

export default Header
