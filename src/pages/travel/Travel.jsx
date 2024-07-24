import React, { useState } from 'react'
import TravelList from '@pages/travel/components/TravelList.jsx'
import WriteTravel from '@pages/travel/components/WriteTravel.jsx'

// 초기 데이터
export const initialTravels = [
  {
    id: 1,
    title: '여수',
    content: '미추와 함께하는 여수 여행 일기',
    thumbnail: 'src/assets/images/여수여행_썸네일.jpg'
  },
  {
    id: 2,
    title: '대전',
    content: '성심당을 가보다',
    thumbnail: 'src/assets/images/대전여행_썸네일.jpg'
  },
  {
    id: 3,
    title: '영종도',
    content: '인천 사람이라면 한 번쯤은 가본다는',
    thumbnail: 'src/assets/images/영종도여행_썸네일.jpg'
  }
]

const Travel = () => {
  // 상태를 정의한다.
  // travels: 여행 목록을 저장하는 상태이다.
  const [travels, setTravels] = useState(initialTravels)

  // editingTravel: 현재 수정 중인 여행 항목을 저장하는 상태이다.
  const [editingTravel, setEditingTravel] = useState(null)

  // showForm: 글쓰기 폼을 표시할지 여부를 저장하는 상태이다.
  const [showForm, setShowForm] = useState(false)

  // 여행 항목을 저장하는 함수이다.
  // editingTravel 이 있으면, 즉 편집 중인 글이 있다면 해당 항목을 업데이트 한다.
  // 편집 중인 항목이 없다면 새 항목을 추가한다.
  const handleSave = (newTravel) => {
    if (editingTravel) {
      // 편집 중인 여행 항목을 업데이트한다.
      setTravels((prevTravels) =>
        prevTravels.map((travel) => (travel.id === editingTravel.id ? { ...travel, ...newTravel } : travel))
      )
    } else {
      // 새로운 여행 항목을 추가한다.
      setTravels([...travels, { ...newTravel, id: travels.length + 1 }])
    }

    // 폼을 숨기고, 수정 중인 항목을 초기화한다.
    setShowForm(false)
    setEditingTravel(null)
  }

  // 여행 목록을 수정하기 위한 함수이다.
  // 클릭된 여행 목록을 수정 상태로 설정하고 폼을 표시한다.
  const handleEdit = (travel) => {
    setEditingTravel(travel)
    setShowForm(true)
  }

  // 여행 목록을 삭제하는 함수이다.
  // 삭제할 목록의 id 를 기준으로 여행 목록에서 해당 항목을 필터링하여 제거한다.
  const handleDelete = (id) => {
    setTravels((prevTravels) => prevTravels.filter((travel) => travel.id !== id))
  }

  // 수정하는 폼을 취소하는 함수이다.
  // 폼을 숨기고, 수정 중인 항목을 초기화한다.
  const handleCancel = () => {
    setShowForm(false)
    setEditingTravel(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 글쓰기 버튼 */}
      {/* 사용자가 새 여행 목록을 작성할 수 있게 한다. 클릭 시 폼을 표시한다. */}
      <button
        onClick={() => {
          setEditingTravel(null)
          setShowForm(true)
        }}
        className="bg-rose-200 hover:bg-rose-100 text-black px-4 py-2 rounded mb-4"
      >
        글쓰기
      </button>

      {/* 폼 */}
      {/* showForm 상태가 true 일 때, WriteTravel 컴포넌트를 표시한다.
      수정 중일 때는 수정할 여행 목록을 travelEdit 속성으로 전달한다. */}
      {showForm && <WriteTravel travelToEdit={editingTravel} onSave={handleSave} onCancel={handleCancel} />}

      {/* 여행 목록 */}
      {/* 1. TravelList 컴포넌트를 사용해서 여행 목록을 표시한다.
      2. 각 여행 항목에 대해 편집 및 삭제 핸들러를 전달한다. */}
      <TravelList travels={travels} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default Travel
