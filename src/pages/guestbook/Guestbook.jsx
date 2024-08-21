import React, { useState, useEffect } from 'react'

// common
import MetaTags from '@common/components/etc/MetaTags.jsx' // 페이지 메타 태그 설정 컴포넌트
import Pagination from '@common/components/pagination/Pagination.jsx' // 페이지네이션 컴포넌트

// custom hook
import useComments from '@pages/guestbook/hooks/useComments.js'

// components
import CommentSection from '@pages/guestbook/components/CommentSection.jsx'
import CommentForm from '@pages/guestbook/components/CommentForm.jsx'

const Guestbook = () => {
  const [comments, setComments] = useComments() // 댓글 데이터
  const [currentPage, setCurrentPage] = useState(1) // 현재 페이지 상태
  const [totalPages, setTotalPages] = useState(1) // 총 페이지 수 상태

  const commentsPerPage = 6 // 페이지당 댓글 수

  // 페이지네이션 상태를 업데이트하는 함수
  const handlePageChange = (pageNumber) => {
    // 페이지 범위 체크: 1보다 작거나 총 페이지 수를 초과할 경우 변경하지 않음
    if (pageNumber < 1 || pageNumber > totalPages) return
    setCurrentPage(pageNumber)
  }

  // 댓글 데이터가 변경될 때마다 페이지네이션의 총 페이지 수를 업데이트
  useEffect(() => {
    const pages = Math.ceil(comments.length / commentsPerPage) // 총 페이지 수 계산
    setTotalPages(pages)
  }, [comments])

  return (
    <div>
      {/* 페이지의 메타 정보를 설정하는 컴포넌트 */}
      <MetaTags subTitle={' | Guestbook'} description={'방명록 페이지입니다.'} keywords={'guestbook'} />

      {/* 페이지의 주요 컨텐츠를 포함하는 컨테이너 */}
      <div className="max-w-screen-xl w-full mx-auto p-6">
        {/* 댓글 목록과 수정 기능을 포함하는 컴포넌트 */}
        <CommentSection
          comments={comments}
          setComments={setComments}
          currentPage={currentPage}
          commentsPerPage={commentsPerPage}
        />

        {/* 새로운 댓글을 추가하는 폼 컴포넌트 */}
        <CommentForm setComments={setComments} />
      </div>

      {/* 페이지네이션 컴포넌트 */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default Guestbook
