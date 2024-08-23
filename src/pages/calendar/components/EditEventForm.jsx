import React from 'react'
import { useForm } from 'react-hook-form'

const EditEventForm = ({ selectedEvent, handleDeleteEvent, handleUpdateEvent }) => {
  // useForm 훅을 사용하여 폼 상태를 관리
  // defalutValues 옵션을 통해 폼의 초기값을 설정
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: selectedEvent.title, // 이벤트의 제목을 초기값으로 설정
      color: selectedEvent.color // 이벤트의 색상을 초기값으로 설정
    }
  })

  // 폼 제출 시 호출되는 함수
  // data 매개변수는 사용자가 입력한 폼 데이터를 담고 있음
  const onSubmit = (data) => {
    // handleUpdateEvent 함수에 현재 선택된 이벤트(selectedEvent)와
    // 폼 데이터를 합친 객체를 전달하여 업데이트
    handleUpdateEvent({ ...selectedEvent, ...data })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 이벤트 제목 입력 필드 */}
        <div className="flex">
          {/* react-hook-form의 register를 사용하여 필드 등록
          required 옵션을 통해 제목 입력을 필수로 지정 */}
          <input
            type="text"
            {...register('title', { required: true })}
            className="border border-gray-300 focus:outline-none focus:border-rose-400 p-2 w-full rounded-md mr-4"
            placeholder="이벤트 제목"
          />

          {/* 색상 선택 필드 */}
          <div className="flex justify-center items-center">
            {/* react-hook-form의 register를 사용하여 필드 등록 */}
            <input
              type="color"
              {...register('color')}
              className="w-8 h-8 border-none cursor-pointer bg-transparent p-0 m-0"
            />
          </div>
        </div>

        {/* 저장 및 삭제 버튼 그룹 */}
        <div className="flex justify-end mt-6 gap-2">
          {/* 저장 버튼: 폼 제출 시 onSubmit 함수 호출 */}
          <button
            type="submit" // 폼 제출을 트리거하는 버튼
            className="text-blue-700 duration-200 px-2 py-1 rounded text-sm hover:font-bold hover:bg-blue-700 hover:text-white"
          >
            저장
          </button>

          {/* 삭제 버튼: 클릭 시 handleDeleteEvent 함수 호출 */}
          <button
            type="button" // 버튼 클릭 시 폼이 제출되지 않도록 type을 'button'으로 설정
            onClick={handleDeleteEvent}
            className="text-rose-700 px-2 py-1 rounded text-sm hover:font-bold duration-200 hover:bg-rose-700 hover:text-white"
          >
            삭제
          </button>
        </div>
      </form>
    </>
  )
}

export default EditEventForm
