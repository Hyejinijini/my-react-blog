import { useState, useEffect } from 'react'
import { useRequestHook } from '@common/hooks/useDataFetchHooks.js'

// common
import Loading from '@common/components/etc/Loading.jsx'

// components
import ProfileImage from '@common/components/sidebar/ProfileImage.jsx'
import ProfileIntro from '@common/components/sidebar/ProfileIntro.jsx'
import SideBarForm from '@common/components/sidebar/SideBarForm.jsx'
import GoToLink from '@common/components/sidebar/GoToLink.jsx'

// data URL
import { PROFILE_URL } from '@api/keys/sidebar/url.js'

const SideBar = () => {
  const { state: apiProfile } = useRequestHook(PROFILE_URL)
  const [loading, setLoading] = useState(true)

  // 수정 폼 state
  const [editMode, setEditMode] = useState(false)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const loadProfile = () => {
      // 로컬스토리지에서 데이터 가져오기
      const storedProfile = localStorage.getItem('profile')
      if (storedProfile) {
        // 로컬스토리지에서 프로필 데이터가 존재하는 경우, 이를 파싱하여 상태를 업데이트
        setProfile(JSON.parse(storedProfile))
      } else if (apiProfile && typeof apiProfile === 'object') {
        // 로컬스토리지에 데이터가 없을 경우에는 API에서 데이터를 가져와 상태를 업데이트
        setProfile(apiProfile)
        localStorage.setItem('profile', JSON.stringify(apiProfile)) // 가져온 데이터를 로컬스토리지에 저장
      }
      setLoading(false) // 데이터가 로드되면 로딩 상태를 false로 설정
    }

    loadProfile() // 프로필 데이터 로드 함수 호출
  }, [apiProfile])

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  // 로딩 중일 때 로딩 컴포넌트를 렌더링
  if (loading) return <Loading />

  return (
    <aside className="-mr-2">
      {/* profile 의 초기상태는 null 로 초기화 되어있기 때문에 ProfileDataFetcher 컴포넌트가 데이터를 가져오기 전까지는 profile 이 null 상태이다. 데이터를 로드하고 setProfile 을 호출하면 profile 상태가 업데이트 된다.
      그래서 profile 이 null 이 아닌 경우에만 컴포넌트가 렌더링되도록 조건을 추가한 것이다. profile 데이터가 로드되기 전에 컴포넌트들이 렌더링 되는것을 막기 위함이다.*/}
      {profile && (
        <div className="mt-2 sm:ml-4 sm:mt-2 sm:mr-4 md:ml-0 ml-4 mr-4">
          <div className="flex flex-row md:flex-col lg:flex-col xl:felx-col">
            {/* 프로필 이미지 */}
            <ProfileImage profile={profile} />

            {/* 프로필 소개란 */}
            <ProfileIntro editMode={editMode} profile={profile} />
          </div>
          {/* 프로필 소개란 수정폼 */}
          <SideBarForm profile={profile} editMode={editMode} setEditMode={setEditMode} setProfile={handleSaveProfile} />

          {/* 소셜 링크 */}
          {!editMode && (
            <>
              <hr className="border-1 border-rose-100 mb-6 md:w-64 lg:w-72" />
              <GoToLink editMode={editMode} profile={profile} />
            </>
          )}
        </div>
      )}
    </aside>
  )
}

export default SideBar
