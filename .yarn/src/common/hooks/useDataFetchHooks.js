import { useEffect } from 'react'
import { getRequest } from '@/api/apiClient.js'

export const useRequestHook = (url, state, setState) => {
  useEffect(() => {
    getRequest({ url }).then((data) => setState(data))
  }, [])

  return {
    state
  }
}
