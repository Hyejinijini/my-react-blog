import React, { useState, useEffect } from 'react'

// WriteFood 컴포넌트 정의
const WriteFood = ({ foodToEdit, onSave, onCancel }) => {
  // 입력 필드 상태를 관리
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [thumbnail, setThumbnail] = useState('')

  // foodToEdit이 변경될 때마다 호출된다.
  // foodToEdit이 주어지면 해당 항목의 제목, 내용, 썸네일을 상태에 설정한다.
  useEffect(() => {
    if (foodToEdit) {
      setTitle(foodToEdit.title)
      setContent(foodToEdit.content)
      setThumbnail(foodToEdit.thumbnail)
    }
  }, [foodToEdit])

  // 저장 버튼 클릭 시 호출되는 함수
  const handleSave = () => {
    // 제목과 내용이 비어있지 않은지 확인한다.
    if (title && content) {
      // onSave 핸들러를 호출하여 입력된 데이터를 상위 컴포넌트로 전달한다.
      onSave({ title, content, thumbnail })
    }
  }

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      {/* 제목 */}
      <h2 className="text-xl font-bold mb-4">{foodToEdit ? '수정하기' : '새 글 작성하기'}</h2>

      {/* 제목 입력 필드 */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        className="border p-2 mb-2 w-full rounded"
      />

      {/* 썸네일 URL 입력 필드 */}
      <input
        type="text"
        value={thumbnail}
        onChange={(e) => setThumbnail(e.target.value)}
        placeholder="썸네일 URL"
        className="border p-2 mb-2 w-full rounded"
      />

      {/* 내용 입력 필드 */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        rows="4"
        className="border p-2 mb-4 w-full rounded"
      />

      {/* 저장 및 취소 버튼 */}
      <div className="flex justify-end space-x-2">
        {/* 저장 버튼: 클릭 시 handleSave 함수 호출 */}
        <button
          onClick={handleSave}
          className="bg-rose-400 hover:bg-rose-500 transition duration-100 text-white px-4 py-2 rounded"
        >
          저장
        </button>

        {/* 취소 버튼: 클릭 시 onCancel 호출 */}
        <button
          onClick={onCancel}
          className="bg-gray-400 hover:bg-gray-500 transition duration-100 text-white px-4 py-2 rounded"
        >
          취소
        </button>
      </div>
    </div>
  )
}

export default WriteFood
