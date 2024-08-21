const NextBtn = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <>
      {/* 다음 버튼 */}
      <button
        // 버튼 클릭 시 onPageChange 함수 호출
        // 현재 페이지에서 1을 더한 값을 전달하며, 페이지 번호가 총 페이지 수를 초과하지 않도록 함
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        // 현재 페이지가 총 페이지 수와 같을 때 버튼을 비활성화
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-2 text-xl text-gray-600 font-bold rounded-full disabled:opacity-50 hover:cursor-pointer"
      >
        <code className="text-rose-400">&gt;</code>
      </button>
    </>
  )
}

export default NextBtn
