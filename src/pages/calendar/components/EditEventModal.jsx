import React from 'react'

const EditEventModal = ({
  selectedEvent,
  handleEditInputChange,
  handleEditColorChange,
  handleUpdateEvent,
  handleDeleteEvent
}) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-xl font-bold mb-4">일정 수정</h2>
      <div className="mb-4">
        <input
          type="text"
          value={selectedEvent.title}
          onChange={handleEditInputChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="이벤트 제목"
        />
      </div>
      <div className="mb-4">
        <input type="color" value={selectedEvent.color} onChange={handleEditColorChange} className="w-full" />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleUpdateEvent}
          className="bg-white text-rose-700 border border-rose-400 hover:bg-rose-500 hover:text-white duration-200 px-4 py-2 rounded"
        >
          저장
        </button>
        <button
          onClick={handleDeleteEvent}
          className="bg-rose-500 border border-rose-500 text-white px-4 py-2 rounded hover:bg-white hover:border hover:border-rose-400 hover:text-rose-600 duration-200"
        >
          삭제
        </button>
      </div>
    </div>
  </div>
)

export default EditEventModal
