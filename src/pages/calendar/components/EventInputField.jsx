const EventInputField = ({ newEvent, handleInputChange, handleColorChange }) => {
  return (
    <>
      {/* 제목 입력 필드 */}
      <input
        type="text"
        value={newEvent.title}
        onChange={handleInputChange} // 입력값이 변경될 때 handleInputChange 함수 호출
        className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md mr-4"
        placeholder="일정을 입력해주세요."
      />

      {/* 색상 선택 필드 */}
      <div className="flex justify-center">
        <input
          type="color"
          value={newEvent.color}
          onChange={handleColorChange} // // 색상 값이 변경될 때 handleColorChange 함수 호출
          className="w-8 h-8 border-none cursor-pointer bg-transparent p-0 m-0"
        />
      </div>
    </>
  )
}

export default EventInputField
