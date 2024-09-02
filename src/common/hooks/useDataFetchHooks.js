import { useState, useEffect } from 'react'
import { getRequest } from '@/api/apiClient.js'

/**
 * Request 쓰는데 공통으로 쓰는애. 그래서 뭐가 올지 모르기 때문에 기본값을 null 로 처리.
 */
// useRequestHook 은 특정 URL 로부터 데이터를 가져와서 상태로 관리하는 훅이다. 이를 통해 컴포넌트에서 데이터를 간단하게 가져오고 사용 할 수 있다.
export const useRequestHook = (url) => {
  // 데이터를 저장할 상태를 초기화
  // 초기값은 null
  const [state, setState] = useState(null)

  // url 이 변경될 때마다 getRequest 함수를 호출하여 데이터를 가져옴
  useEffect(() => {
    // getRequest 함수를 호출하여 데이터를 가져온 후, 이를 상태로 설정
    getRequest([url]).then((data) => setState(data))
  }, [url])

  // 현재 상태와 상태를 업데이트하는 함수를 객체 형태로 반환
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
