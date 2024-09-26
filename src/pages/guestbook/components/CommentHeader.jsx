// components
import CommentEditDelete from '@pages/guestbook/components/CommentEditDelete.jsx'

const CommentHeader = ({ comment, setEditingIndex, setEditComment, index, setComments, comments }) => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-b border-rose-200 dark:border-[#4A4A4A]">
        {/* 댓글 작성자와 타임스탬프를 표시하는 영역 */}
        <div className="flex items-center space-x-2">
          {/* 댓글 작성자의 이름 */}
          <span className="text-base font-semibold dark:text-customWhite">{comment.user}</span>
          {/* 댓글의 작성 시간 */}
          <span className="text-gray-500 text-sm dark:text-customGrayMuted">{comment.timestamp}</span>
        </div>

        {/* 댓글 수정 및 삭제 버튼을 포함하는 영역 */}
        <div className="flex space-x-2">
          {/* CommentEditDelete 컴포넌트를 사용하여 댓글 수정 및 삭제 기능 제공 */}
          <CommentEditDelete
            setEditingIndex={setEditingIndex}
            setEditComment={setEditComment}
            index={index}
            setComments={setComments}
            comments={comments}
          />
        </div>
      </div>
    </>
  )
}

export default CommentHeader
