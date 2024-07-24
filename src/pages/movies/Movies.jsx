import React, { useState } from 'react'
import ReviewList from '@pages/movies/components/ReviewList.jsx'
import WriteReview from '@pages/movies/components/WriteReview.jsx'
import MetaTags from '@common/components/MetaTags.jsx'

// 초기 데이터
export const initialReviews = [
  {
    id: 1,
    title: '인사이드 아웃 2',
    content: '불안이, 당황이, 따분이, 부럽이, 레쯔고',
    thumbnail:
      'https://i.namu.wiki/i/eS6fxYppDtyG6X-IChI1yZ-yCIFPzNeToQ_0KnNE5LSY_RwRZvjeFk8osUQXY3lA064-J82KHxl-qEU9FZHRbA.webp'
  },
  {
    id: 2,
    title: '하이재킹',
    content: '꼬꼬무를 먼저 보고 오면 4배는 더 슬픈 영화',
    thumbnail:
      'https://i.namu.wiki/i/n7gZojqBOqmt988Mw0B5oFEizjINWAcKNoR5sGcE6Y9FXzHjn-t6lMJjf5Vw7W_Cca3DOJEaVrssqJ-f96YESg.webp'
  }
]

// Movies 컴포넌트 정의
const Movies = () => {
  // 리뷰 상태를 관리
  const [reviews, setReviews] = useState(initialReviews)
  // 글쓰기 폼 표시 여부를 관리
  const [isWriting, setIsWriting] = useState(false)
  // 현재 수정 중인 리뷰를 저장
  const [currentReview, setCurrentReview] = useState(null)

  // 리뷰 작성하기 위해 모달을 열거나 닫는 함수
  const openWriteReview = (review = null) => {
    setCurrentReview(review)
    setIsWriting(true)
  }

  // 수정하는 폼을 취소하는 함수이다.
  // 폼을 숨기고, 수정 중인 항목을 초기화한다.
  const handleCancel = () => {
    setIsWriting(false)
    setCurrentReview(null)
  }

  // 리뷰를 추가하거나 수정하는 함수
  const saveReview = (review) => {
    if (currentReview) {
      // 수정일 경우
      setReviews(reviews.map((r) => (r.id === review.id ? review : r)))
    } else {
      // 새 리뷰 추가
      setReviews([...reviews, { ...review, id: reviews.length + 1 }])
    }
    setIsWriting(false)
  }

  // 리뷰를 삭제하는 함수
  // 주어진 id 와 일치하지 않는 리뷰만 필터링해서 상태를 업데이트
  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <MetaTags subTitle={' | 영화 리뷰'} description={'영화리뷰 페이지입니다.'} keywords={'영화, 리뷰'} />

      {/* 글쓰기 버튼 */}
      <button
        onClick={() => openWriteReview()}
        className="bg-rose-200 hover:bg-rose-100 text-black px-4 py-2 rounded mb-4"
      >
        글쓰기
      </button>

      {/* 폼 */}
      {isWriting && <WriteReview review={currentReview} onSave={saveReview} onCancel={handleCancel} />}

      {/* 리뷰 목록을 표시하는 컴포넌트 */}
      <ReviewList reviews={reviews} onEdit={openWriteReview} onDelete={deleteReview} />
    </div>
  )
}

export default Movies
