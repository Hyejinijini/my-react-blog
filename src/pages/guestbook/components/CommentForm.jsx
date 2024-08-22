import { useForm } from 'react-hook-form'

const CommentForm = ({ setComments, commentsPerPage, setCurrentPage }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      newComment: '' // 입력 필드의 초기값 설정
    }
  })

  // 댓글 추가 버튼 클릭 시 호출되는 함수
  const onSubmit = (data) => {
    // 폼에서 입력된 댓글 내용을 가져옴
    const { newComment } = data

    // 입력 필드가 비어 있거나 공백만 있는 경우 댓글을 추가하지 않음
    if (!newComment.trim()) return

    // 현재 날짜와 시간 문자열을 생성
    const now = new Date().toLocaleString()

    // 댓글 리스트를 업데이트하여 새로운 댓글을 추가
    setComments((prevComments) => {
      const updatedComments = [
        ...prevComments, // 기존 댓글들을 유지
        { text: newComment, timestamp: now, user: 'Anonymous' } // 새로운 댓글 객체를 추가
      ]

      // 총 댓글 수와 페이지당 댓글 수로 새 페이지 계산
      const totalComments = updatedComments.length
      const totalPages = Math.ceil(totalComments / commentsPerPage)
      const newPage = totalPages // 댓글이 추가된 페이지로 이동

      // 현재 페이지 업데이트
      setCurrentPage(newPage)

      return updatedComments
    })

    // 폼 필드 초기화
    reset({ newComment: '' })
  }

  return (
    <>
      {/* 댓글 작성 섹션의 제목 */}
      <h1 className="text-lg font-bold mt-4 mb-2">Add a comment</h1>

      <div className="mb-6">
        {/* 댓글 입력 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 댓글 입력 필드 */}
          <textarea
            {...register('newComment', { required: '댓글 내용을 입력해주세요.' })} // 댓글 입력 필드에 대한 유효성 검사
            rows="4"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-rose-500"
            placeholder="여기에 댓글을 작성해주세요..."
          />

          <div className="flex justify-end mt-2">
            {/* 댓글 추가 버튼 */}
            <button
              type="submit" // 클릭 시 폼 제출
              className="bg-rose-400 hover:bg-rose-500 font-bold text-white px-4 py-1 rounded-md border border-rose-400"
            >
              Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default CommentForm
