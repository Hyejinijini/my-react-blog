const EditBtn = ({ handleUpdateEvent, handleDeleteEvent }) => {
  return (
    <>
      {/* 저장 버튼: 클릭 시 handleUpdateEvent 함수 호출 */}
      <button
        onClick={handleUpdateEvent}
        className="text-blue-700 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-blue-700 hover:text-white"
      >
        저장
      </button>

      {/* 삭제 버튼: 클릭 시 handleDeleteEvent 함수 호출 */}
      <button
        onClick={handleDeleteEvent}
        className="text-rose-700 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-700 hover:text-white"
      >
        삭제
      </button>
    </>
  )
}

export default EditBtn
