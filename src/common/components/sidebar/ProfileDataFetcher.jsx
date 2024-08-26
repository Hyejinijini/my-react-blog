import { useState, useEffect } from 'react'
import { useRequestHook } from '@common/hooks/useDataFetchHooks.js'

// data URL
import { PROFILE_URL } from '@api/keys/sidebar/url.js'

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
        // 로컬스토리지에서 프로필 데이터가 존재하는 경우, 이를 파싱하여 상태를 업데이트
        setProfile(JSON.parse(storedProfile))
        return
      }
      // 로컬스토리지에 데이터가 없을 경우에는 API 에서 데이터를 가져와 상태를 업데이트
      if (apiProfile && typeof apiProfile === 'object') {
        setProfile(apiProfile) // 상태 업데이트
        localStorage.setItem('profile', JSON.stringify(apiProfile)) // 가져온 데이터를 로컬스토리지에 저장
      }
    }

    loadProfile() // 프로필 데이터 로드 함수 호출
    setLoading(false) // 데이터가 로드되면 로딩 상태를 false 로 설정
  }, [apiProfile])

  // 로딩 중일 때 Loading 컴포넌트 렌더링
  if (loading) return <Loading />

  // 해당 컴포넌트는 UI 를 렌더링할 필요가 없으므로 null 반환
  return null
}

export default ProfileDataFetcher
