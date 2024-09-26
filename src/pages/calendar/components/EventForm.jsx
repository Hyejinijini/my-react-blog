import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { ChromePicker } from 'react-color'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const EventForm = ({ newEvent, handleAddEvent, handleCloseModal }) => {
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: {
      title: newEvent.title || '', // 제목 초기값
      color: newEvent.color || '#ffffff', // 색상 초기값
      startDate: newEvent.startDate || '', // 시작 날짜 초기값
      endDate: newEvent.endDate || '' // 종료 날짜 초기값
    }
  })

  const [showColorPicker, setShowColorPicker] = useState(false)
  const [color, setColor] = useState(newEvent.color || '#ffffff')
  const colorPickerRef = useRef(null)

  // 날짜 상태 변수
  const [startDate, setStartDate] = useState(newEvent.startDate || null)
  const [endDate, setEndDate] = useState(newEvent.endDate || null)

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
  const onSubmit = (formData) => {
    handleAddEvent(formData)
    handleCloseModal() // 폼 제출 후 모달 닫기
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 어두운 배경 */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleCloseModal}></div>

      {/* 모달 내용 */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white py-2 rounded-md border border-gray-300 relative z-50 w-1/2 dark:bg-customGrayDark dark:border-customGrayMid"
      >
        {/* 모달 제목 */}
        <h2 className="text-lg font-bold text-gray-700 mb-4 border-b dark:text-customWhite border-gray-300 dark:border-customGrayMuted pb-4 pt-2 px-4">
          일정 추가
        </h2>

        <label className="text-gray-700 px-4 dark:text-customWhite">일정</label>
        <div className="relative mb-4 px-4 flex items-center mt-2">
          <input
            type="text"
            {...register('title', { required: true })}
            className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md pr-16 dark:bg-customGrayDark dark:border-customGrayMid dark:text-customWhite dark:focus:border-customRoseMid"
            placeholder="일정을 입력해주세요."
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

        {/* 시작 날짜 입력 필드 */}
        <div className="flex flex-col gap-2 mb-4 px-4">
          <label className="text-gray-700 dark:text-customWhite">시작 날짜</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date)
              setValue('startDate', date ? date.toISOString().split('T')[0] : '') // ISO 형식으로 저장
            }}
            className="w-full h-10 cursor-pointer bg-transparent border border-gray-300 focus:outline-none focus:border-rose-400 rounded-md mb-2 p-2 dark:border-customGrayMid dark:focus:border-customRoseMid"
            dateFormat="yyyy-MM-dd"
            placeholderText="날짜 선택"
          />
        </div>

        {/* 종료 날짜 입력 필드 */}
        <div className="flex flex-col gap-2 px-4">
          <label className="text-gray-700 dark:text-customWhite">종료 날짜</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => {
              setEndDate(date)
              setValue('endDate', date ? date.toISOString().split('T')[0] : '') // ISO 형식으로 저장
            }}
            className="w-full h-10 cursor-pointer bg-transparent border border-gray-300 focus:outline-none focus:border-rose-400 p-2 rounded-md dark:border-customGrayMid dark:focus:border-customRoseMid"
            dateFormat="yyyy-MM-dd"
            placeholderText="날짜 선택"
          />
        </div>

        {/* 추가 및 닫기 버튼 그룹 */}
        <div className="flex justify-end mt-6 gap-2 p-4">
          <button
            type="submit"
            className="text-white bg-rose-400 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-500 hover:text-white dark:bg-customRoseMid dark:border-customRoseMuted dark:hover:bg-customRoseMuted"
          >
            추가
          </button>

          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-gray-500 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-gray-600 hover:text-white dark:bg-customGrayMid text-customWhite dark:hover:bg-[#636363] dark:border-customGrayDark"
          >
            닫기
          </button>
        </div>
      </form>
    </div>
  )
}

export default EventForm
