import React from 'react'

// Pagination 컴포넌트: 페이지 네비게이션을 위한 버튼과 페이지 정보를 렌더링
// current(현재 페이지), totalPages(총 페이지 수), onPageChange(페이지 변경 함수) 세 가지 props 를 받는다.
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center mt-4 text-xl">
      {/* Preveious 버튼
      1. "onClick": 버튼 클릭 시 onPageChange 함수를 호출하여 현재 페이지를 1 줄인다.
      2. "disabled": 현재 페이지가 1일 때 버튼을 비활성화 한다. */}
      <button
        onClick={() => onPageChange(currentPage - 1)} // 이전 페이지로 이동
        disabled={currentPage === 1} // 첫 페이지일 때 비활성화
        className="px-4 py-2 mx-2 bg-gray-400 text-white font-bold rounded-full disabled:opacity-50"
      >
        <code>&lt;</code>
      </button>

      {/* 현재 페이지와 총 페이지 수를 표시한다. */}
      <span className="px-4 py-2 font-bold text-neutral-600">
        {currentPage} / {totalPages}
      </span>

      {/* 1. "onClick": 버튼 클릭 시 onPageChange 함수를 호출하여 현재 페이지를 1 늘린다.
      2. "disabled": 현재 페이지가 총 페이지 수와 같을 때 버튼을 비활성화 한다. */}
      <button
        onClick={() => onPageChange(currentPage + 1)} // 다음 페이지로 이동
        disabled={currentPage === totalPages} // 마지막 페이지일 때 비활성화
        className="px-4 py-2 mx-2 bg-gray-400 text-white font-bold rounded-full disabled:opacity-50"
      >
        <code>&gt;</code>
      </button>
    </div>
  )
}

export default Pagination
