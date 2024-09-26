import React from 'react'

// components
import EditEventForm from '@pages/calendar/components/EditEventForm.jsx'

const EditEventModal = ({ selectedEvent, handleUpdateEvent, handleDeleteEvent, handleCloseModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 모달 컨테이너 */}
      <div>
        {/* 이벤트 수정 폼 */}
        <EditEventForm
          selectedEvent={selectedEvent} // 현재 수정 중인 이벤트 데이터를 전달
          handleDeleteEvent={handleDeleteEvent} // 이벤트 삭제 함수 전달
          handleUpdateEvent={handleUpdateEvent} // 이벤트 수정 함수 전달
          handleCloseModal={handleCloseModal}
        />
      </div>
    </div>
  )
}

export default EditEventModal
