import { useState, useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'
import { getRequest } from '@/api/apiClient.js'
import { ABOUT_ME_URL, ABOUT_LIST_URL } from '@/api/keys/about/url.js'

export const useAboutDataFetchHook = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    getRequest(ABOUT_ME_URL).then((data) => setUserInfo(data))
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
 * @returns
 */
export const useAboutListHook = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    getRequest(ABOUT_LIST_URL)
      .then((data) => {
        setList(data)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error) // 오류 확인
      })
  }, [])

  return list
}
