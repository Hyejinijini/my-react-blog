import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { ChromePicker } from 'react-color'

const EditEventForm = ({ selectedEvent, handleDeleteEvent, handleUpdateEvent, handleCloseModal }) => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      title: selectedEvent.title,
      color: selectedEvent.color,
      startDate: selectedEvent.start,
      endDate: selectedEvent.end
    }
  })

  const [showColorPicker, setShowColorPicker] = useState(false)
  const [color, setColor] = useState(selectedEvent.color)
  const colorPickerRef = useRef(null)

  // 색상 변경 시 폼 상태와 로컬 색상 상태 업데이트
  const handleColorChange = (color) => {
    setColor(color.hex)
    setValue('color', color.hex)
  }

  // 색상 선택기 클릭 시 팝업 닫힘 방지
  const handleClick = (event) => {
    event.stopPropagation()
    setShowColorPicker(!showColorPicker)
  }

  // 폼 제출 시 호출되는 함수
  const onSubmit = (data) => {
    handleUpdateEvent({ ...selectedEvent, ...data })
    handleCloseModal() // 폼 제출 후 모달 닫기
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 어두운 배경 */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseModal}></div>

      {/* 모달 내용 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white py-2 rounded-md border border-gray-300 relative z-50 w-1/2"
      >
        {/* 모달 제목 */}
        <h2 className="text-lg font-bold text-gray-700 mb-4 border-b border-gray-300 pb-4 pt-2 px-4">일정 수정</h2>

        {/* X 버튼
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation() // 이벤트 전파 방지
            handleCloseModal()
          }}
          className="absolute top-5 right-2 text-gray-500 hover:text-gray-700 z-50"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button> */}

        <label className="text-gray-700 px-4">일정</label>
        <div className="relative mb-4 px-4 flex items-center">
          <input
            type="text"
            {...register('title', { required: true })}
            className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md pr-16"
            placeholder="이벤트 제목"
          />

          <button
            type="button"
            onClick={handleClick}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
          />

          {showColorPicker && (
            <div ref={colorPickerRef} className="absolute right-0 top-full mt-2 z-10">
              <ChromePicker color={color} onChange={handleColorChange} disableAlpha />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2 mb-4 px-4">
          <label className="text-gray-700">시작 날짜</label>
          <input
            type="date"
            {...register('startDate', { required: true })}
            className="w-full h-10 cursor-pointer bg-transparent border border-gray-300 focus:outline-none focus:border-rose-400 rounded-md mb-2 p-2"
            style={{ border: '1px solid #d1d5db' }} // border 스타일 직접 적용
          />
        </div>

        <div className="flex flex-col gap-2 mb-4 px-4">
          <label className="text-gray-700">종료 날짜</label>
          <input
            type="date"
            {...register('endDate')}
            className="w-full h-10 cursor-pointer bg-transparent border border-gray-300 focus:outline-none focus:border-rose-400 p-2 rounded-md"
            style={{ border: '1px solid #d1d5db' }} // border 스타일 직접 적용
          />
        </div>

        <div className="flex justify-end gap-2 p-4">
          <button
            type="submit"
            className="text-blue-700 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-blue-700 hover:text-white"
          >
            저장
          </button>

          <button
            type="button"
            onClick={handleDeleteEvent}
            className="text-rose-700 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-700 hover:text-white"
          >
            삭제
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditEventForm
