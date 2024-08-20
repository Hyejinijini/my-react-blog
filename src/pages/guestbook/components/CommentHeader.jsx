// components
import CommentEditDelete from '@pages/guestbook/components/CommentEditDelete.jsx'

const CommentHeader = ({ comment, setEditingIndex, setEditComment, index, setComments, comments }) => {
  return (
    <>
      <div className="flex items-center justify-between p-2 border-b border-rose-200">
        <div className="flex items-center space-x-2">
          <span className="text-base font-semibold">{comment.user}</span>
          <span className="text-gray-500 text-sm">{comment.timestamp}</span>
        </div>
        <div className="flex space-x-2">
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
