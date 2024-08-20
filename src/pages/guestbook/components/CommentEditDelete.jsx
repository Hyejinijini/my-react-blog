const CommentEditDelete = ({ setEditingIndex, setEditComment, index, setComments, comments }) => {
  const handleEditClick = (index) => {
    setEditingIndex(index)
    setEditComment(comments[index].text)
  }

  const handleDeleteClick = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index)
    setComments(updatedComments)
  }
  return (
    <>
      <button
        onClick={() => handleEditClick(index)}
        className="text-blue-500 py-1 rounded-md text-sm px-1 hover:font-bold duration-200"
      >
        Edit
      </button>
      <button
        onClick={() => handleDeleteClick(index)}
        className="text-red-500 px-1 py-1 rounded-md text-sm hover:font-bold duration-200"
      >
        Delete
      </button>
    </>
  )
}

export default CommentEditDelete
