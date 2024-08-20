import { useState, useEffect, useCallback } from 'react'

const useFilteredListHook = (searchTerm, list) => {
  const [filteredList, setFilteredList] = useState([]) // 필터링된 목록 상태 추가

  useEffect(() => {
    // 검색어에 따라 필터링된 목록 생성
    if (list) {
      const fList = list.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.content.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredList(fList)
    }
  }, [searchTerm, list])

  return filteredList
}

export default useFilteredListHook
