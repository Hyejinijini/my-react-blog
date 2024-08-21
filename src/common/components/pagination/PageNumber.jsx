const PageNumber = ({ currentPage, totalPages, onPageChange }) => {
  // 페이지 범위를 5페이지씩 보여주기 위한 변수
  const pageRange = 5

  // 현재 페이지를 기준으로 시작 페이지와 끝 페이지를 계산
  const startPage = Math.max(1, Math.floor((currentPage - 1) / pageRange) * pageRange + 1)
  const endPage = Math.min(totalPages, startPage + pageRange - 1)

  // 페이지 번호 배열을 생성하고 생략 부호를 추가하는 함수
  const getPageNumbers = () => {
    const pages = []

    // 첫 페이지 그룹
    // 시작 페이지가 2 이상일 경우 첫 페이지와 생략 부호를 추가
    if (startPage > 1) {
      pages.push(1)
      if (startPage > 2) {
        pages.push('···')
      }
    }

    // 페이지 번호
    // 현재 페이지 번호에 해당하는 페이지 번호들을 추가
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // 마지막 페이지 그룹
    // 끝 페이지가 총 페이지 수보다 작을 경우 생략 부호와 마지막 페이지를 추가
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('···')
      }
      // 마지막 페이지 추가
      pages.push(totalPages)
    }

    return pages
  }

  return (
    <>
      {/* 페이지 번호 버튼 */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          // 페이지 번호가 숫자인 경우 onPageChange 함수를 호출하여 해당 페이지로 이동 (셍략 부호는 대상이 아니기 때문에)
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-4 py-2 text-base ${currentPage === page ? 'text-white font-bold bg-rose-400 rounded-full' : 'text-gray-700'} ${page === '···' ? 'text-gray-500' : ''} hover:underline`}
          disabled={page === '···'}
        >
          {page}
        </button>
      ))}
    </>
  )
}

export default PageNumber
