import React from 'react'

// components
import EventForm from '@pages/calendar/components/EventForm.jsx'

const EventModal = ({ newEvent, handleAddEvent, handleCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 p-6 rounded-lg max-w-lg w-full">
        {/* 이벤트 추가하는 폼 */}
        <EventForm
          newEvent={newEvent} // 새 이벤트에 대한 상태를 전달
          handleAddEvent={handleAddEvent} // 이벤트 추가 함수를 전달
          handleCloseModal={handleCloseModal} // 모달 닫기 함수를 전달
        />
      </div>
    </div>
  )
}

export default EventModal
