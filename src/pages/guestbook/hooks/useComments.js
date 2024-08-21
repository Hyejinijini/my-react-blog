import { useState, useEffect } from 'react'

// 댓글 데이터를 로드하고 저장하는 커스텀 훅
const useComments = () => {
  // 댓글 상태 저장
  const [comments, setComments] = useState([])

  useEffect(() => {
    const loadComments = () => {
      try {
        // 로컬스토리지에서 'comments' 항목 가져오기
        const storedComments = localStorage.getItem('comments')
        if (storedComments) {
          // 로컬스토리지에서 댓글 데이터가 존재하면 JSON 으로 파싱하여 상태 업데이트
          setComments(JSON.parse(storedComments))
        } else {
          // 로컬스토리지에 댓글 데이터가 없을 경우, 기본 댓글 데이터를 설정
          const defaultComments = [
            {
              text: '안녕하세요~!',
              timestamp: new Date().toLocaleString(),
              user: 'Anonymous'
            },
            {
              text: '짱구가 너무 귀여워요 💛🧡💚',
              timestamp: new Date().toLocaleString(),
              user: 'Anonymous'
            },
            {
              text: '방가방가',
              timestamp: new Date().toLocaleString(),
              user: 'Anonymous'
            }
          ]

          // 기본 댓글 데이터를 상태에 저장하고 로컬스토리지에 저장
          setComments(defaultComments)
          localStorage.setItem('comments', JSON.stringify(defaultComments))
        }
      } catch (error) {
        console.error('Failed to load comments from localStorage:', error)
      }
    }

    loadComments() // 댓글 데이터를 로드하는 함수를 호출
  }, [])

  // 댓글 데이터가 변경될 때마다 로컬스토리지에 댓글 데이터를 저장하는 useEffect 훅
  useEffect(() => {
    if (comments.length > 0) {
      try {
        // 댓글 데이터가 존재하면 로컬스토리지에 저장
        localStorage.setItem('comments', JSON.stringify(comments))
      } catch (error) {
        console.error('Failed to save comments to localStorage:', error)
      }
    }
  }, [comments])

  return [comments, setComments]
}

export default useComments
