import { useState, useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'
import { getRequest } from '@/api/apiClient.js'

export const useAboutDataFetchHook = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    getRequest().then((data) => setUserInfo(data))
  }, [])

  return {
    userInfo
  }
}

export const useAboutSwrHook = () => {
  const { data, error } = useSWRImmutable(ABOUT_ME_URL, getRequest)

  return {
    userInfo: data
  }
}

/**
 * about 에서 목록 데이터 가져오는 Hook
 * @returns 목록 데이터
 */
export const useAboutListHook = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getRequest()
      .then((data) => {
        setList(data)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error) // 오류 확인
      })
  }, [])

  return list
}
