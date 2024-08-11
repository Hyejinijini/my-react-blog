import { useState, useEffect } from 'react'

export const useDataHook = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetcher = async () => {
      setIsLoading(true)
      try {
        const data = await getRequest(url)
        setData(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetcher()
  }, [url])

  return {
    data,
    isLoading,
    error,
    url
  }
}
