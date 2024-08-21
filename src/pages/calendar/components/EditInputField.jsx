const EditInputField = ({ selectedEvent, handleEditInputChange, handleEditColorChange }) => {
  return (
    <>
      {/* 이벤트 제목 입력 필드 */}
      <input
        type="text"
        value={selectedEvent.title} // 현재 선택된 이벤트의 제목을 입력 필드의 값으로 설정
        onChange={handleEditInputChange} // 입력값이 변경될 때 호출될 함수
        className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md mr-4"
        placeholder="이벤트 제목"
      />

      {/* 색상 선택 필드 */}
      <div className="flex justify-center">
        <input
          type="color"
          value={selectedEvent.color} // 현재 선택된 이벤트의 색상을 색상 선택기의 값으로 설정
          onChange={handleEditColorChange} // 색상 값이 변경될 때 호출될 함수
          className="w-8 h-8 border-none cursor-pointer bg-transparent p-0 m-0"
        />
      </div>
    </>
  )
}

export default EditInputField
