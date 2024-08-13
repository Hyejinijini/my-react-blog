import { useState, useEffect } from 'react'
import { getRequest } from '@/api/apiClient.js'

export const useRequestHook = (url) => {
  const [state, setState] = useState([])

  useEffect(() => {
    getRequest([url]).then((data) => setState(data))
  }, [url])

  return {
    state
  }
}
