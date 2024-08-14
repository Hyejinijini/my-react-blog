import React from 'react'

import OffCanvasLeft from '@common/components/header/OffCanvasLeft.jsx'
import DropdownButton from '@common/components/header/DropdownButton.jsx'
import CalendarModal from '@common/components/header/CalendarModal.jsx'
import BlogTitle from '@common/components/header/BlogTitle.jsx'
import AboutHeaderList from '@pages/about/components/AboutHeaderList.jsx'

const BlogHeader = () => {
  return (
    <header className="text-gray-600 bg-rose-50 border-b border-b-rose-200">
      <div className="flex p-4 pb-2 gap-3 items-center">
        <div className="flex gap-2 w-full items-center">
          <OffCanvasLeft />
          <div className="ml-2">{/* 아이콘 추가할 예정 */}</div>
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

      <AboutHeaderList />
    </header>
  )
}

export default BlogHeader
