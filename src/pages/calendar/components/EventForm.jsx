import React from 'react'
import { useForm } from 'react-hook-form'

const EventForm = ({ newEvent, handleAddEvent, handleCloseModal }) => {
  // useForm 훅을 사용하여 폼 상태를 관리
  // defalutValues 옵션을 통해 폼의 초기값을 설정
  const { handleSubmit, register } = useForm({
    defaultValues: {
      title: newEvent.title, // newEvent의 제목을 초기값으로 설정
      color: newEvent.color // newEvent 색상을 초기값으로 설정
    }
  })

  // 폼 제출 시 호출되는 함수
  // 폼의 데이터를 인자로 받아 handleAddEvent 함수를 호출
  const onSubmit = (newEvent) => {
    handleAddEvent(newEvent) // handleAddEvent함수에 폼 데이터를 전달하여 새 이벤트를 추가
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 제목 입력 필드 */}
      <div className="flex">
        {/* react-hook-form 의 register 를 사용하여 이 필드를 폼 상태에 등록하고,
        required 옵션을 통해 제목 입력을 필수로 지정  */}
        <input
          type="text"
          {...register('title', { required: true })}
          className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md mr-4"
          placeholder="일정을 입력해주세요."
        />

        {/* 색상 선택 필드 */}
        <div className="flex justify-center items-center">
          {/* react-hook-form 의 register 를 사용하여 이 필드를 폼 상태에 등록 */}
          <input
            type="color"
            {...register('color')}
            className="w-8 h-8 border-none cursor-pointer bg-transparent p-0 m-0"
          />
        </div>
      </div>

      {/* 추가 및 닫기 버튼 그룹 */}
      <div className="flex justify-end mt-6 gap-2">
        {/* 이벤트 추가 버튼 */}
        {/* 폼을 제출항 onSubmit 함수를 호출 */}
        <button
          type="submit" // 폼 제출을 트리거하는 버튼
          className="text-rose-700 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-700 hover:text-white"
        >
          추가
        </button>

        {/* 닫기 버튼 */}
        <button
          type="button"
          onClick={handleCloseModal} // 버튼 클릭 시 폼이 제출되지 않도록 type을 'button'으로 설정
          className="text-gray-700 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-gray-700 hover:text-white"
        >
          닫기
        </button>
      </div>
    </form>
  )
}

export default EventForm
