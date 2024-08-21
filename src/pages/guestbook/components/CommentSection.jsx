import { useState } from 'react'

// icons
import { FaCircleUser } from 'react-icons/fa6'

// components
import CommentHeader from '@pages/guestbook/components/CommentHeader.jsx'
import CommentEditForm from '@pages/guestbook/components/CommentEditForm.jsx'

const CommentSection = ({ comments, setComments, currentPage, commentsPerPage }) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editComment, setEditComment] = useState('')

  // 페이지별로 댓글을 분리
  const startIndex = (currentPage - 1) * commentsPerPage // 현재 페이지의 시작 인덱스
  const endIndex = startIndex + commentsPerPage // 현재 페이지의 끝 인덱스
  const currentComments = comments.slice(startIndex, endIndex) // 현재 페이지에 맞는 댓글만 추출

  return (
    <>
      <div className="border-b-2 border-gray-300 py-4">
        <ul className="space-y-6 pb-4">
          {/* 현재 페이지에 맞는 댓글이 있는 경우 렌더링 */}
          {currentComments.length > 0 ? (
            currentComments.map((comment, index) => (
              <li key={comment.id} className="flex items-start space-x-4">
                <FaCircleUser className="w-10 h-10 rounded-full text-rose-400" />

                {/* 댓글 내용 및 헤더를 담는 컨테이너 */}
                <div className="flex-1 border border-rose-200 rounded-lg bg-rose-50 overflow-hidden">
                  {/* 댓글 헤더: 작성자와 타임스탬프, 수정/삭제 버튼 */}
                  <CommentHeader
                    comment={comment}
                    comments={comments}
                    setComments={setComments}
                    index={index}
                    setEditComment={setEditComment}
                    setEditingIndex={setEditingIndex}
                  />

                  {/* 댓글 내용을 수정할 수 있는 폼 */}
                  <div className="bg-white p-4 relative">
                    <CommentEditForm
                      index={index}
                      comment={comment}
                      comments={comments}
                      setEditComment={setEditComment}
                      editComment={editComment}
                      setComments={setComments}
                      setEditingIndex={setEditingIndex}
                      editingIndex={editingIndex}
                    />
                  </div>
                </div>
              </li>
            ))
          ) : (
            // 댓글이 없는 경우 표시할 메시지
            <li className="text-gray-600 text-center">아직 댓글이 없네요. 첫 댓글을 남겨보세요!</li>
          )}
        </ul>
      </div>
    </>
  )
}

export default CommentSection
