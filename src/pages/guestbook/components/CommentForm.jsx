import { useState } from 'react'

const CommentForm = ({ setComments }) => {
  // 댓글 입력 필드의 상태
  const [newComment, setNewComment] = useState('')

  // 입력 필드의 값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    setNewComment(e.target.value)
  }

  // 댓글 추가 버튼 클릭 시 호출되는 함수
  const handleAddComment = () => {
    if (!newComment.trim()) return // 입력 필드가 비어 있거나 공백만 있는 경우 댓글을 추가하지 않음

    // 현재 날짜와 시간 문자열을 생성
    const now = new Date().toLocaleString()

    // 댓글 리스트를 업데이트하여 새로운 댓글을 추가
    setComments((prevComments) => [
      ...prevComments, // 기존 댓글들을 유지
      { text: newComment, timestamp: now, user: 'Anonymous' } // 새로운 댓글 객체를 추가
    ])
    setNewComment('')
  }

  return (
    <>
      {/* 댓글 작성 섹션의 제목 */}
      <h1 className="text-lg font-bold mt-4 mb-2">Add a comment</h1>

      <div className="mb-6">
        {/* 댓글 입력 필드 */}
        <textarea
          value={newComment}
          onChange={handleInputChange}
          rows="4"
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="여기에 댓글을 작성해주세요..."
        />

        <div className="flex justify-end mt-2">
          {/* 댓글 추가 버튼 */}
          <button
            onClick={handleAddComment}
            className="bg-rose-400 font-bold text-white px-4 py-1 rounded-md border border-rose-400"
          >
            Comment
          </button>
        </div>
      </div>
    </>
  )
}
export default CommentForm
