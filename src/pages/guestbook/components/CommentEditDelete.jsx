import React from 'react'

// 댓글 수정 및 삭제 기능을 제공하는 컴포넌트
const CommentEditDelete = ({ setEditingIndex, setEditComment, index, setComments, comments }) => {
  // 댓글 수정 버튼 클릭 시 호출되는 함수
  const handleEditClick = (index) => {
    // 선택된 댓글의 인덱스를 상태에 저장하여 수정할 댓글을 찾음
    setEditingIndex(index)
    // 선택된 댓글의 텍스트를 상태에 저장하여 수정할 내용을 설정
    setEditComment(comments[index].text)
  }

  // 댓글 삭제 버튼 클릭 시 호출되는 함수
  const handleDeleteClick = (index) => {
    // 현재 댓글 리스트에서 선택된 댓글을 제외한 새로운 댓글 리스트를 생성
    const updatedComments = comments.filter((_, i) => i !== index)
    // 새로운 댓글 리스트를 상태에 저장하여 댓글을 업데이트
    setComments(updatedComments)
  }
  return (
    <>
      {/* 댓글 수정 버튼 */}
      <button
        onClick={() => handleEditClick(index)}
        className="text-blue-500 dark:text-[#4F83C2] py-1 rounded-md text-sm px-1 hover:font-bold duration-200"
      >
        Edit
      </button>

      {/* 댓글 삭제 버튼 */}
      <button
        onClick={() => handleDeleteClick(index)}
        className="text-red-500 dark:text-[#D94A3A] px-1 py-1 rounded-md text-sm hover:font-bold duration-200"
      >
        Delete
      </button>
    </>
  )
}

export default CommentEditDelete
