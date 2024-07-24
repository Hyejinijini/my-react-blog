import React, { useState } from 'react'
import FoodList from '@pages/food/components/FoodList.jsx'
import WriteFood from '@pages/food/components/WriteFood.jsx'

// 초기 데이터
export const initialFoods = [
  {
    id: 1,
    title: '인천 맛집',
    content: '인천 맛집 소개',
    thumbnail: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: '서울 맛집',
    content: '서울 맛집 소개',
    thumbnail: 'https://via.placeholder.com/150'
  }
]

const Food = () => {
  // 맛집 목록 저장
  const [foods, setFoods] = useState(initialFoods)
  // 현재 수정 중인 맛집 항목을 저장
  const [editingFood, setEditingFood] = useState(null)
  // 글쓰기/수정 폼의 표시 여부
  const [showForm, setShowForm] = useState(false)

  // 맛집 목록을 저장하는 함수
  // 새 맛집 항목을 추가하거나 기존 항목을 수정한다.
  const handleSave = (newFood) => {
    // 수정 중인 항목이 있을 경우: 기존 항목을 수정
    if (editingFood) {
      setFoods((prevFoods) => prevFoods.map((food) => (food.id === editingFood.id ? { ...food, ...newFood } : food)))
    } else {
      // 새로운 맛집 항목을 추가한다.
      setFoods([...foods, { ...newFood, id: foods.length + 1 }])
    }
    // 폼을 숨기고, 수정 상태를 초기화한다.
    setShowForm(false)
    setEditingFood(null)
  }

  // 맛집 항목을 수정하기 위해 폼을 열고, 해당 항목을 설정한다.
  const handleEdit = (food) => {
    // 수정할 음식
    setEditingFood(food)
    // 폼을 표시
    setShowForm(true)
  }

  // 맛집 항목을 삭제하는 함수
  const handleDelete = (id) => {
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== id))
  }

  // 취소 버튼 누르면 폼 사라지게 하는 함수
  const handleCancel = () => {
    setShowForm(false)
    setEditingFood(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 글쓰기 버튼 */}
      <button
        onClick={() => {
          setEditingFood(null) // 현재 수정 중인 항목을 초기화
          setShowForm(true) // 폼을 표시
        }}
        className="bg-rose-200 hover:bg-rose-100 text-black px-4 py-2 rounded mb-4"
      >
        글쓰기
      </button>

      {/* 수정 폼 */}
      {showForm && <WriteFood foodToEdit={editingFood} onSave={handleSave} onCancel={handleCancel} />}

      {/* 맛집 목록 표시 */}
      <FoodList foods={foods} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default Food
