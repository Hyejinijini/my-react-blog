import { useState, useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'
import { getRequest } from '@/api/apiClient.js'
import { ABOUT_ME_URL } from '@/api/keys/about/url.js'

// axios 쓴거
export const useAboutDataFetchHook = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    getRequest(ABOUT_ME_URL).then((data) => setUserInfo(data))
  }, [])

  return {
    userInfo
  }
}

// swr 쓴거
export const useAboutSwrHook = () => {
  const { data, error } = useSWRImmutable(ABOUT_ME_URL, getRequest)

  return {
    userInfo: data
  }
}
