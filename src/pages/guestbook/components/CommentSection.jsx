import { useState } from 'react'

// icons
import { FaCircleUser } from 'react-icons/fa6'

// components
import CommentHeader from '@pages/guestbook/components/CommentHeader.jsx'
import CommentEditForm from '@pages/guestbook/components/CommentEditForm.jsx'

const CommentSection = ({ comments, setComments }) => {
  const [editingIndex, setEditingIndex] = useState(null)
  const [editComment, setEditComment] = useState('')

  return (
    <>
      <div className="border-b-2 border-gray-300 py-4">
        <ul className="space-y-6 pb-4">
          {comments.map((comment, index) => (
            <li key={index} className="flex items-start space-x-4">
              <FaCircleUser className="w-10 h-10 rounded-full text-rose-400" />
              <div className="flex-1 border border-rose-200 rounded-lg bg-rose-50 overflow-hidden">
                <CommentHeader
                  comment={comment}
                  comments={comments}
                  setComments={setComments}
                  index={index}
                  setEditComment={setEditComment}
                  setEditingIndex={setEditingIndex}
                />

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
          ))}
        </ul>
      </div>
    </>
  )
}

export default CommentSection
