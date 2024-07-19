import React from 'react'
import { Link } from 'react-router-dom'

// TravelList 컴포넌트 정의
// 이 컴포넌트는 여행 목록을 받아와서 표시하고, 각 항목에 대해 수정 및 삭제 기능을 제공한다.
const TravelList = ({ travels, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {/* 여행 목록을 반복해서 표시한다. */}
      {travels.map((travel) => (
        <div key={travel.id} className="p-4">
          {/* 링크를 클릭하면 해당 여행의 상세 페이지로 이동합니다. */}
          <Link to={`/detail/travel/${travel.id}`} className="flex items-start space-x-4">
            {/* 썸네일 이미지 */}
            <div className="flex-shrink-0 w-48 h-48 overflow-hidden">
              <img src={travel.thumbnail} alt={travel.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              {/* 제목 */}
              <h2 className="text-xl font-bold mb-2">{travel.title}</h2>

              {/* 내용 */}
              <p className="line-clamp-3 mt-2">{travel.content}</p>
            </div>
          </Link>

          {/* 수정 및 삭제 버튼 */}
          <div className="flex justify-end space-x-2">
            {/* 수정 버튼: 클릭 시 onEdit 핸들러를 호출해서 해당 항목을 편집 상태로 설정한다. */}
            <button onClick={() => onEdit(travel)} className="text-blue-600 px-4 py-2 rounded">
              수정
            </button>

            {/* 삭제 버튼: 클릭 시 onDelete 핸들러를 호출해서 해당 항목을 삭제한다. */}
            <button onClick={() => onDelete(travel.id)} className=" text-red-600 px-4 py-2 rounded">
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

export default TravelList
