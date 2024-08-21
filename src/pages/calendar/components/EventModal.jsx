import React from 'react'

// components
import EventInputField from '@pages/calendar/components/EventInputField.jsx'
import EventBtn from '@pages/calendar/components/EventBtn.jsx'

const EventModal = ({
  newEvent, // 새로운 이벤트의 데이터 객체
  handleInputChange, // 입력 값 변경 처리 함수
  handleColorChange, // 색상 선택 변경 처리 함수
  handleAddEvent, // 이벤트 추가 처리 함수
  handleCloseModal // 모달 닫기 처리 함수
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white border border-gray-300 p-6 rounded-lg max-w-lg w-full">
      {/* 모달의 제목 */}
      <h2 className="text-xl font-bold mb-4">일정 추가</h2>

      {/* 입력 필드 */}
      <div className="mb-4 flex items-center justify-between">
        <EventInputField
          newEvent={newEvent}
          handleInputChange={handleInputChange}
          handleColorChange={handleColorChange}
        />
      </div>

      {/* 모달 하단 버튼들 */}
      <div className="flex justify-end mt-4 gap-2">
        <EventBtn handleAddEvent={handleAddEvent} handleCloseModal={handleCloseModal} />
      </div>
    </div>
  </div>
)

export default EventModal
