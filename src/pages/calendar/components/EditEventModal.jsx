import React from 'react'

// components
import EditInputField from '@pages/calendar/components/EditInputField.jsx'
import EditBtn from '@pages/calendar/components/EditBtn.jsx'

const EditEventModal = ({
  selectedEvent,
  handleEditInputChange,
  handleEditColorChange,
  handleUpdateEvent,
  handleDeleteEvent
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    {/* 모달 컨테이너 */}
    <div className="bg-white p-6 rounded-lg max-w-lg w-full border border-gray-300">
      {/* 모달 제목 */}
      <h2 className="text-xl font-bold mb-6 text-gray-700">일정 수정</h2>

      {/* 입력 필드와 색상 선택 필드 */}
      <div className="mb-6 flex items-center justify-between">
        <EditInputField
          selectedEvent={selectedEvent}
          handleEditInputChange={handleEditInputChange}
          handleEditColorChange={handleEditColorChange}
        />
      </div>

      {/* 버튼들 */}
      <div className="flex items-center justify-end mt-4 gap-2">
        <EditBtn handleUpdateEvent={handleUpdateEvent} handleDeleteEvent={handleDeleteEvent} />
      </div>
    </div>
  </div>
)

export default EditEventModal
