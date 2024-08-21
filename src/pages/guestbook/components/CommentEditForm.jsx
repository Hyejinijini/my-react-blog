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
  // 댓글 수정 입력 필드의 값이 변경될 때 호출되는 함수
  const handleEditChange = (e) => {
    setEditComment(e.target.value) // 수정할 댓글의 새 값을 상태에 저장
  }

  // 댓글 수정 완료 버튼 클릭 시 호출되는 함수
  const handleSaveEdit = (index) => {
    // 댓글 목록을 업데이트하여 현재 인덱스의 댓글을 수정된 댓글로 교체
    const updatedComments = comments.map((comment, i) => (i === index ? { ...comment, text: editComment } : comment))
    setComments(updatedComments) // 업데이트된 댓글 목록을 상태에 저장
    setEditingIndex(null) // 수정 모드를 종료하기 위해 현재 편집 인덱스를 null로 설정
    setEditComment('') // 수정 폼의 텍스트를 초기화
  }

  return (
    <>
      {/* 댓글 수정 모드일 때 보여지는 수정 폼 */}
      {editingIndex === index ? (
        <div>
          <textarea
            value={editComment}
            onChange={handleEditChange}
            rows="3"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-rose-600 focus:border-rose-600"
          />

          <div className="flex justify-end mt-2 space-x-2">
            {/* 취소 버튼 */}
            <button
              onClick={() => setEditingIndex(null)}
              className="bg-gray-50 text-gray-600 px-4 py-1 rounded-md border font-bold hover:bg-gray-600 hover:text-white duration-100 border-gray-300"
            >
              Cancel
            </button>

            {/* 댓글 업데이트 버튼 */}
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
