import { useEffect, useState } from 'react'
import { getRequest } from '@/api/apiClient.js'
import { PROFILE_URL } from '@api/keys/home/url.js'
import { HiOutlineLink } from 'react-icons/hi'

const SideBar = () => {
  const [profile, setProfile] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    nickName: '',
    name: '',
    profileImage: '',
    bio: '',
    links: []
  })

  useEffect(() => {
    getRequest(PROFILE_URL)
      .then((data) => {
        console.log('Profile data:', data) // 데이터 확인
        // 데이터가 예상과 다른 경우를 대비한 기본값 설정
        setProfile(data)
        setFormData({
          nickName: data.nickName || '',
          name: data.name || '',
          profileImage: data.profileImage || '',
          bio: data.bio || '',
          links: data.links || []
        })
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error) // 오류 확인
      })
  }, [])

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSaveClick = () => {
    // TODO: Save formData to server or mock data
    setProfile(formData)
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setEditMode(false)
    // Optionally, revert formData to the original profile data
    setFormData(profile)
  }

  const handleLinkChange = (index, value) => {
    const updatedLinks = formData.links.map((link, i) => (i === index ? value : link))
    setFormData({
      ...formData,
      links: updatedLinks
    })
  }

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

        <div>
          {editMode ? (
            <div className="flex flex-col items-center space-y-1 text-sm">
              <div className="w-full max-w-xs sm:max-w-sm">
                <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="border border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 rounded-md p-2 px-3 py-1 mb-2 w-full"
                />
              </div>

              <div className="w-full max-w-xs sm:max-w-sm">
                <label className="block mb-2 text-sm font-bold text-gray-700">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Add a bio"
                  className="border rounded-md h-20 p-2 px-3 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <div className="w-full max-w-xs sm:max-w-sm">
                <label className="block mb-2 text-sm font-bold text-gray-700">Profile Image URL</label>
                <input
                  type="text"
                  name="profileImage"
                  value={formData.profileImage}
                  onChange={handleChange}
                  placeholder="Profile Image URL"
                  className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                />
              </div>

              <div className="w-full max-w-xs sm:max-w-sm">
                <label className="block mb-2 text-sm font-bold text-gray-700">Social accounts</label>
                {formData.links.map((link, index) => (
                  <div key={index} className="flex items-center mb-2 space-x-2">
                    <HiOutlineLink className="text-gray-600 text-lg" />
                    <input
                      type="text"
                      value={link.url}
                      onChange={(e) => handleLinkChange(index, e.target.value)}
                      placeholder="Link URL"
                      className="border rounded-md p-2 px-3 py-1 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex space-x-1.5 w-full max-w-xs sm:max-w-sm pt-1">
                <button
                  onClick={handleSaveClick}
                  className="border border-rose-400 bg-rose-400 text-white rounded-md h-8 hover:bg-rose-500 duration-100 w-1/6"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="border border-gray-300 bg-gray-50 rounded-md h-8 hover:bg-gray-200 duration-100 w-1/4"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              className="border border-rose-200 bg-rose-50 rounded-md h-8 hover:bg-rose-100 duration-100 mb-6 sm:w-full w-full md:w-64 lg:w-72"
              onClick={handleEditClick}
            >
              Edit profile
            </button>
          )}
        </div>

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
