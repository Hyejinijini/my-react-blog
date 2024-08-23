import React from 'react'

// components
import EditEventForm from '@pages/calendar/components/EditEventForm.jsx'

const EditEventModal = ({ selectedEvent, handleUpdateEvent, handleDeleteEvent }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 모달 컨테이너 */}
      <div className="bg-white p-6 rounded-lg max-w-lg w-full border border-gray-300">
        {/* 모달 제목 */}
        <h2 className="text-xl font-bold mb-6 text-gray-700">일정 수정</h2>

        {/* 이벤트 수정 폼 */}
        <EditEventForm
          selectedEvent={selectedEvent} // 현재 수정 중인 이벤트 데이터를 전달
          handleDeleteEvent={handleDeleteEvent} // 이벤트 삭제 함수 전달
          handleUpdateEvent={handleUpdateEvent} // 이벤트 수정 함수 전달
        />
      </div>
    </div>
  )
}

export default EditEventModal
