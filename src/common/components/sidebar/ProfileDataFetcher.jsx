import { useState, useEffect } from 'react'
import { useRequestHook } from '@common/hooks/useDataFetchHooks.js'

// data URL
import { PROFILE_URL } from '@api/keys/home/url.js'

// common
import Loading from '@common/components/etc/Loading.jsx'

const ProfileDataFetcher = ({ setProfile }) => {
  // 데이터 URL
  const url = PROFILE_URL

  // 커스텀 훅을 사용하여 API로부터 데이터 가져오기
  const { state: apiProfile } = useRequestHook(url)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProfile = () => {
      // 로컬스토리지에서 데이터 가져오기
      const storedProfile = localStorage.getItem('profile')
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile))
        return
      }
      // 로컬스토리지에 데이터가 없을 경우에는 API 에서 데이터를 가져온다.
      if (typeof apiProfile === 'object') {
        setProfile(apiProfile)
        localStorage.setItem('profile', JSON.stringify(apiProfile))
      }
    }

    loadProfile()
    setLoading(false)
  }, [apiProfile])
  if (loading) return <Loading />

  // 해당 컴포넌트는 아무런 UI 를 렌더링할 필요가 없으므로 null 을 return 하도록 했음.
  return null
}

export default ProfileDataFetcher
