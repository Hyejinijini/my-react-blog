import { useState } from 'react'

const CommentForm = ({ setComments }) => {
  const [newComment, setNewComment] = useState('')

  const handleInputChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleAddComment = () => {
    if (!newComment.trim()) return

    const now = new Date().toLocaleString()
    setComments((prevComments) => [...prevComments, { text: newComment, timestamp: now, user: 'Anonymous' }])
    setNewComment('')
  }

  return (
    <>
      <h1 className="text-lg font-bold mt-4 mb-2">Add a comment</h1>
      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={handleInputChange}
          rows="4"
          className="border border-gray-300 p-2 w-full rounded-md"
          placeholder="여기에 댓글을 작성해주세요..."
        />
        <div className="flex justify-end mt-2">
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
