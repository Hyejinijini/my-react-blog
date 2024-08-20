import React from 'react'

const EventModal = ({ newEvent, handleInputChange, handleColorChange, handleAddEvent, handleCloseModal }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg max-w-lg w-full">
      <h2 className="text-xl font-bold mb-4">일정 추가</h2>
      <div className="mb-4">
        <input
          type="text"
          value={newEvent.title}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 w-full rounded"
          placeholder="일정을 입력해주세요."
        />
      </div>
      <div className="mb-4">
        <input type="color" value={newEvent.color} onChange={handleColorChange} className="w-full" />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleAddEvent}
          className="bg-white text-rose-700 border border-rose-400 px-4 py-2 rounded hover:bg-rose-500 hover:text-white duration-200"
        >
          추가
        </button>
        <button
          onClick={handleCloseModal}
          className="hover:bg-white border border-gray-600 hover:text-black px-4 py-2 rounded bg-gray-500 text-white duration-200"
        >
          닫기
        </button>
      </div>
    </div>
  </div>
)

export default EventModal
