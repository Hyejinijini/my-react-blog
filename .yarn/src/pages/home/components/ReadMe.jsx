import { useState } from 'react'
import { BiPencil, BiSave } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const ReadMe = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState('👋🏻 소개') // 초기 제목
  const [content, setContent] = useState('안녕하세요 :)') // 초기 내용

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
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2">
      <div className="border border-rose-200 rounded-md p-4">
        <div className="text-xs p-2 flex items-center justify-between">
          <div>HYEHYE / README.md</div>
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
        </div>

        {isEditing ? (
          <div>
            <input
              type="text"
              className="block border-b border-rose-200 text-2xl font-bold w-full mb-3 p-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full border-b border-rose-200 p-2 h-40"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-2xl pb-2 mb-1 p-2">
              {title}
              <hr className="border-b-1 border-rose-100 mt-1" />
            </h2>
            <p className="px-2 py-2">{content}</p>
          </div>
        )}
      </div>

      <div className="border border-rose-200 rounded-md mt-4">
        <iframe
          src="https://example.com/your-introduction"
          title="소개서"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] border-rose-100 border-2 rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}

export default ReadMe
