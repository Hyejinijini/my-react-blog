import React from 'react'

// components
import PreviousBtn from '@common/components/pagination/PreviousBtn.jsx'
import NextBtn from '@common/components/pagination/NextBtn.jsx'
import PageNumber from '@common/components/pagination/PageNumber.jsx'

// Pagination 컴포넌트: 페이지 네비게이션을 위한 버튼과 페이지 정보를 렌더링
// currentPage(현재 페이지), totalPages(총 페이지 수), onPageChange(페이지 변경 함수) 세 가지 props를 받는다.
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-center text-base space-x-1">
      <PreviousBtn onPageChange={onPageChange} currentPage={currentPage} />

      <PageNumber onPageChange={onPageChange} currentPage={currentPage} totalPages={totalPages} />

      <NextBtn onPageChange={onPageChange} currentPage={currentPage} totalPages={totalPages} />
    </div>
  )
}

export default Pagination
