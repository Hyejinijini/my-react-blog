// hooks/useComments.js
import { useState, useEffect } from 'react'

const useComments = () => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const loadComments = () => {
      try {
        const storedComments = localStorage.getItem('comments')
        if (storedComments) {
          setComments(JSON.parse(storedComments))
        } else {
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
          setComments(defaultComments)
          localStorage.setItem('comments', JSON.stringify(defaultComments))
        }
      } catch (error) {
        console.error('Failed to load comments from localStorage:', error)
      }
    }

    loadComments()
  }, [])

  useEffect(() => {
    if (comments.length > 0) {
      try {
        localStorage.setItem('comments', JSON.stringify(comments))
      } catch (error) {
        console.error('Failed to save comments to localStorage:', error)
      }
    }
  }, [comments])

  return [comments, setComments]
}

export default useComments
