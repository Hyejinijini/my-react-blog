const EventBtn = ({ handleAddEvent, handleCloseModal }) => {
  return (
    <>
      {/* 이벤트 추가 버튼 */}
      <button
        onClick={handleAddEvent}
        className="text-rose-700 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-700 hover:text-white"
      >
        추가
      </button>

      {/* 닫기 버튼 */}
      <button
        onClick={handleCloseModal}
        className="text-gray-700 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-gray-700 hover:text-white"
      >
        닫기
      </button>
    </>
  )
}

export default EventBtn
