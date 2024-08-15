// icons
import { BiPencil, BiSave } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const IntroEditBtn = ({ isEditing, setIsEditing }) => {
  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    // 저장 로직 추가 (예: API 호출)
    console.log('Saved:', { title, content })
  }

  const handleCancelClick = () => {
    setIsEditing(false)
    // 원래 상태로 복원 로직 추가 (예: API로부터 원래 데이터를 다시 가져오기)
  }

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <>
          <button
            className="text-lg text-gray-500 hover:text-rose-500 hover:cursor-pointer duration-100"
            onClick={handleSaveClick}
          >
            <BiSave />
          </button>
          <button
            className="text-lg text-gray-500 hover:text-rose-500 hover:cursor-pointer duration-100"
            onClick={handleCancelClick}
          >
            <AiOutlineClose />
          </button>
        </>
      ) : (
        <button
          className="text-lg text-gray-500 hover:text-rose-500 hover:cursor-pointer duration-100"
          onClick={handleEditClick}
        >
          <BiPencil />
        </button>
      )}
    </div>
  )
}

export default IntroEditBtn
