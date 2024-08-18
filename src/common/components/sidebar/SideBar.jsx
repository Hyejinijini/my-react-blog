import { useState } from 'react'

import ProfileDataFetcher from '@common/components/sidebar/ProfileDataFetcher.jsx'
import ProfileImage from '@common/components/sidebar/ProfileImage.jsx'
import ProfileIntro from '@common/components/sidebar/ProfileIntro.jsx'
import SideBarForm from '@common/components/sidebar/SideBarForm.jsx'
import GoToLink from '@common/components/sidebar/GoToLink.jsx'

const SideBar = () => {
  // 수정 폼 state
  const [editMode, setEditMode] = useState(false)
  const [profile, setProfile] = useState(null)

  const handleSaveProfile = (updatedProfile) => {
    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
  }

  return (
    <aside className="-mr-2">
      {/* 프로필 데이터 가져오기 */}
      <ProfileDataFetcher setProfile={setProfile} />

      {/* profile 의 초기상태는 null 로 초기화 되어있기 때문에 ProfileDataFetcher 컴포넌트가 데이터를 가져오기 전까지는 profile 이 null 상태이다. 데이터를 로드하고 setProfile 을 호출하면 profile 상태가 업데이트 된다.
      그래서 profile 이 null 이 아닌 경우에만 컴포넌트가 렌더링되도록 조건을 추가한 것이다. profile 데이터가 로드되기 전에 컴포넌트들이 렌더링 되는것을 막기 위함이다.*/}
      {profile && (
        <div className="mt-2 sm:ml-4 sm:mt-2 sm:mr-4 md:ml-0 ml-4 mr-4">
          {/* 프로필 이미지 */}
          <ProfileImage profile={profile} />

          {/* 프로필 소개란 */}
          <ProfileIntro editMode={editMode} profile={profile} />

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
