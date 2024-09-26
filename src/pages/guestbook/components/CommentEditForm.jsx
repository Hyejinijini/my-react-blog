import { useForm } from 'react-hook-form'

const CommentEditForm = ({ index, comment, comments, editComment, setComments, setEditingIndex, editingIndex }) => {
  // react-hook-form을 사용하여 폼 상태를 관리
  const { register, handleSubmit } = useForm({
    defaultValues: {
      commentText: comment.text // 초기값으로 현재 댓글의 텍스트를 설정
    }
  })

  // 댓글 수정 완료 버튼 클릭 시 호출되는 함수
  const handleSaveEdit = (data) => {
    // 댓글 목록을 업데이트하여 현재 인덱스의 댓글을 수정된 댓글로 교체
    const updatedComments = comments.map((comment, i) =>
      i === index ? { ...comment, text: data.commentText } : comment
    )
    setComments(updatedComments) // 업데이트된 댓글 목록을 상태에 저장
    setEditingIndex(null) // 수정 모드를 종료하기 위해 현재 편집 인덱스를 null로 설정
  }

  return (
    <>
      {/* 댓글 수정 모드일 때 보여지는 수정 폼 */}
      {editingIndex === index ? (
        <form onSubmit={handleSubmit(handleSaveEdit)}>
          <div>
            {/* 댓글 수정 영역 */}
            {/* react-hook-form의 register를 사용하여 필드 등록
            required 옵션을 통해 텍스트 입력을 필수로 지정 */}
            <textarea
              {...register('commentText', { required: true })}
              rows="3" // 텍스트 영역의 행 수
              className="dark:bg-customGrayMid border border-gray-300 dark:border-[#6C6C6C] p-2 w-full rounded-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:focus:border-customRoseMid"
            />
            <div className="flex justify-end mt-2 space-x-2">
              {/* 취소 버튼 */}
              <button
                type="button" // 클릭 시 폼 제출 방지
                onClick={() => setEditingIndex(null)}
                className="bg-gray-50 text-gray-600 px-4 py-1 rounded-md border font-bold hover:bg-gray-200 duration-100 border-gray-300 dark:bg-[#5B5B5B] dark:border-customGrayMuted dark:hover:bg-[#6A6A6A] dark:text-customWhite"
              >
                Cancel
              </button>

              {/* 댓글 업데이트 버튼 */}
              <button
                type="submit" // 클릭 시 폼 제출
                disabled={!editComment.trim()} // 댓글이 비어있으면 버튼 비활성화
                className={`px-4 py-1 rounded-md border font-bold duration-100 
                ${
                  editComment.trim()
                    ? 'bg-rose-400 text-white border-rose-400 hover:bg-rose-500 dark:bg-customRoseMid dark:border-customRoseMid dark:hover:bg-customRoseMuted'
                    : 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed opacity-50'
                }`}
                // 버튼 비활성화 시 스타일 조정
                style={editComment.trim() ? {} : { pointerEvents: 'none' }}
              >
                Update comment
              </button>
            </div>
          </div>
        </form>
      ) : (
        <p>{comment.text}</p> // 댓글 수정 모드가 아닐 때 댓글 텍스트 표시
      )}
    </>
  )
}

export default CommentEditForm
