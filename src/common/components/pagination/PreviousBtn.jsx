const PreviousBtn = ({ onPageChange, currentPage }) => {
  return (
    <>
      {/* 이전 버튼 */}
      <button
        // 버튼 클릭 시 onPageChange 함수 호출
        // 현재 페이지에서 1을 뺀 값을 전달하며, 페이지 번호가 1보다 작아지지 않도록 함
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        // 현재 페이지가 1일 때 버튼 비활성화
        disabled={currentPage === 1}
        className="px-4 mx-2 text-xl text-gray-600 font-bold rounded-full disabled:opacity-50 hover:cursor-pointer"
      >
        <code className="text-rose-400">&lt;</code>
      </button>
    </>
  )
}

export default PreviousBtn
