import React from 'react'
import { Link } from 'react-router-dom'

// ReviewList 컴포넌트 정의
const ReviewList = ({ reviews, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="p-4">
          {/* 리뷰 상세 페이지로 이동하는 링크 */}
          <Link to={`/detail/movie/${review.id}`} className="flex items-start space-x-4">
            {/* 썸네일 이미지 */}
            <div className="w-48 h-48 overflow-hidden mr-4">
              <img src={review.thumbnail} alt={review.title} className="w-full h-full object-cover" />
            </div>

            {/* 리뷰 내용 */}
            <div className="flex-1">
              {/* 제목 */}
              <h3 className="text-xl font-bold mb-2">{review.title}</h3>

              {/* 내용 요약 */}
              <p className="line-clamp-3 mt-2">{review.content}</p>
            </div>
          </Link>

          {/* 편집 및 삭제 버튼 */}
          <div className="flex justify-end space-x-2">
            <button onClick={() => onEdit(review)} className="text-blue-600 px-4 py-2 rounded">
              수정
            </button>
            <button onClick={() => onDelete(review.id)} className=" text-red-600 px-4 py-2 rounded">
              삭제
            </button>
          </div>
          {/* 항목 아래에 구분선을 추가한다. */}
          <hr className="mt-4 border-t-2 border-gray-300" />
        </div>
      ))}
    </div>
  )
}

export default ReviewList
