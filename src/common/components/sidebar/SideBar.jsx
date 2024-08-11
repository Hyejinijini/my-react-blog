import { useEffect, useState } from 'react'
import { getRequest } from '@/api/apiClient.js'
import { PROFILE_URL } from '@api/keys/home/url.js'
import { HiOutlineLink } from 'react-icons/hi'
import SideBarForm from './SideBarForm.jsx'

const SideBar = () => {
  const [profile, setProfile] = useState(null)
  const [editMode, setEditMode] = useState(false)

  // REVIEWS - 별도 커스텀 훅으로 변경. (SideBar 커스텀 훅이되거나...)
  useEffect(() => {
    getRequest(PROFILE_URL)
      .then((data) => {
        console.log('Profile data:', data) // 데이터 확인
        // 데이터가 예상과 다른 경우를 대비한 기본값 설정
        setProfile(data)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error) // 오류 확인
      })
  }, [])

  if (!profile) return <div>Loading...</div>

  return (
    <aside>
      <div className="mt-2 sm:ml-4 sm:mt-2 sm:mr-4 md:ml-0 ml-4 mr-4">
        {/* 프로필 이미지 */}
        <div className="sm:flex md:flex-col flex flex-row">
          <div>
            <img
              src={profile.profileImage}
              alt="프로필 이미지"
              className="rounded-full w-24 h-24 ml-0 mr-4 mt-8 border-2 border-rose-200 sm:w-28 sm:h-28 md:w-64 md:h-64 lg:w-72 lg:h-72"
            />
          </div>

          {/* 이름 */}
          {!editMode && (
            <div className="flex flex-col sm:py-10 md:py-4 py-8">
              <span className="text-2xl font-bold text-gray-600">{profile.name}</span>
              <span className="text-xl font-thin text-gray-400">{profile.nickName}</span>
              <span className="text-base text-gray-600 py-4 pb-1">{profile.bio}</span>
            </div>
          )}
        </div>

        <SideBarForm profile={profile} editMode={editMode} setEditMode={setEditMode} setProfile={setProfile} />

        {/* 구분선 */}
        {!editMode && <hr className="border-1 border-rose-100 mb-6 md:w-64 lg:w-72" />}

        {/* 링크 */}
        {!editMode && profile.links && (
          <ul className="list-none space-y-3 md:w-64 text-sm">
            {profile.links.length > 0 ? (
              profile.links.map((link, index) => (
                <li key={index} className="mt-4 flex items-center gap-2">
                  <span>
                    <HiOutlineLink className="text-gray-600 text-lg" />
                  </span>
                  <a href={link.url} className="hover:underline hover:text-rose-500">
                    {link.url}
                  </a>
                </li>
              ))
            ) : (
              <li>No links available</li>
            )}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default SideBar
