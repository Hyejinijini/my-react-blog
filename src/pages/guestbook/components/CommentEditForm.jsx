const CommentEditForm = ({
  index,
  comment,
  comments,
  setEditComment,
  editComment,
  setComments,
  setEditingIndex,
  editingIndex
}) => {
  const handleEditChange = (e) => {
    setEditComment(e.target.value)
  }

  const handleSaveEdit = (index) => {
    const updatedComments = comments.map((comment, i) => (i === index ? { ...comment, text: editComment } : comment))
    setComments(updatedComments)
    setEditingIndex(null)
    setEditComment('')
  }

  return (
    <>
      {editingIndex === index ? (
        <div>
          <textarea
            value={editComment}
            onChange={handleEditChange}
            rows="3"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-rose-600 focus:border-rose-600"
          />
          <div className="flex justify-end mt-2 space-x-2">
            <button
              onClick={() => setEditingIndex(null)}
              className="bg-gray-50 text-gray-600 px-4 py-1 rounded-md border font-bold hover:bg-gray-600 hover:text-white duration-100 border-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={() => handleSaveEdit(index)}
              className="bg-rose-600 text-white px-4 py-1 rounded-md border border-rose-600 hover:bg-rose-400 duration-100 font-bold"
            >
              Update comment
            </button>
          </div>
        </div>
      ) : (
        <p>{comment.text}</p>
      )}
    </>
  )
}

export default CommentEditForm
