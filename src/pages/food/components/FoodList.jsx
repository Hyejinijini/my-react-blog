import React from 'react'
import { Link } from 'react-router-dom'

// FoodList 컴포넌트 정의
const FoodList = ({ foods, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {foods.map((food) => (
        <div key={food.id} className="p-4">
          {/* 클릭 시 해당 맛집의 상세 페이지로 이동한다. */}
          <Link to={`/detail/food/${food.id}`} className="flex items-start space-x-4">
            {/* 썸네일 이미지 */}
            <div className="w-48 h-48 overflow-hidden mr-4">
              <img src={food.thumbnail} alt={food.title} className="w-full h-full object-cover" />
            </div>

            {/* 맛집 내용 */}
            <div className="flex-1">
              {/* 제목 */}
              <h3 className="text-xl font-bold mb-2">{food.title}</h3>

              {/* 내용 요약 */}
              <p className="line-clamp-3 mt-2">{food.content}</p>
            </div>
          </Link>

          {/* 편집 및 삭제 버튼 */}
          <div className="flex justify-end space-x-2">
            {/* 수정 버튼: 클릭 시 onEdit 핸들러를 호출하여 해당 맛집 항목을 수정할 수 있도록 한다. */}
            <button onClick={() => onEdit(food)} className="text-blue-600 px-4 py-2 rounded">
              수정
            </button>

            {/* 삭제 버튼: 클릭 시 onDelete 핸들러를 호출하여 해당 맛집 항목을 삭제한다. */}
            <button onClick={() => onDelete(food.id)} className="text-red-600 px-4 py-2 rounded">
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

export default FoodList
