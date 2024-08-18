import { useState, useEffect } from 'react'
import { getRequest } from '@/api/apiClient.js'

/**
 * Request 쓰는데 공통으로 쓰는애. 그래서 뭐가 올지 모르기 때문에 기본값을 null 로 처리.
 */
export const useRequestHook = (url) => {
  const [state, setState] = useState(null)

  useEffect(() => {
    getRequest([url]).then((data) => setState(data))
  }, [url])

  return {
    state,
    setState
  }
}

/**
 * 공통 Request 훅인데, 리스트 형태로 오기 때문에 기본값은 [] 로 처리.
 */
export const useRequestListHook = (url) => {
  const [state, setState] = useState([])

  useEffect(() => {
    getRequest([url]).then((data) => setState(data))
  }, [url])

  return {
    state,
    setState
  }
}
