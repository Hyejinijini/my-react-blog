import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

// icons
import { HiOutlineLink } from 'react-icons/hi'

// react-hook-form 사용
const SideBarForm = ({ profile, editMode, setEditMode, setProfile }) => {
  const { register, handleSubmit } = useForm()
  const [links, setLinks] = useState([])

  // 초기화 및 상태 업데이트
  useEffect(() => {
    if (editMode) {
      // editMode가 true일 때 profile.links로 links 상태를 설정
      setLinks(profile.links || [])
    }
  }, [editMode, profile.links])

  useEffect(() => {
    if (profile) {
      setLinks(profile.links || [])
    }
  }, [profile])

  const onSubmit = (data) => {
    const updatedProfile = {
      ...profile,
      ...data,
      links: links.length ? links : profile.links
    }
    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile))
    setEditMode(false)
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleCancelClick = () => {
    setEditMode(false)
    setLinks(profile.links || [])
  }

  const handleRemoveClick = (index) => {
    setLinks(links.filter((_, i) => i !== index))
  }

  const handleLinkChange = (index, e) => {
    const updatedLinks = [...links]
    updatedLinks[index].url = e.target.value
    setLinks(updatedLinks)
  }

  const getNextId = () => {
    if (links.length === 0) return '1'
    // 현재 최대 id를 숫자로 변환하여 1을 더한 후 문자열로 변환
    return (Math.max(...links.map((link) => parseInt(link.id, 10))) + 1).toString()
  }

  const socialAppend = () => {
    const newId = getNextId()
    setLinks([...links, { id: newId, url: '' }])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {editMode ? (
          <div className="flex flex-col items-center space-y-1 text-sm">
            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                defaultValue={profile.name}
                placeholder="Name"
                className="border border-gray-300 focus:outline-none focus:ring-rose-500 focus:border-rose-500 rounded-md p-2 px-3 py-1 mb-2 w-full"
                {...register('name')}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Bio</label>
              <textarea
                id="bio"
                defaultValue={profile.bio}
                placeholder="Add a bio"
                className="border rounded-md h-20 p-2 px-3 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                {...register('bio')}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Profile Image URL</label>
              <input
                id="image"
                type="url"
                defaultValue={profile.profileImage}
                placeholder="Profile Image URL"
                className="border border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                required
                {...register('image')}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700">Social accounts</label>
              {links.map((link, index) => (
                <div key={link.id} className="flex items-center mb-2 space-x-2">
                  <HiOutlineLink className="text-gray-600 text-lg" />
                  <input
                    id={`url-${index}`}
                    type="url"
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, e)}
                    placeholder="Link URL"
                    required
                    className="border rounded-md p-2 px-3 py-1 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveClick(index)}
                    className="text-red-500 rounded-md h-8 w-8 flex items-center justify-center hover:bg-rose-400 hover:text-white duration-100"
                  >
                    X
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={socialAppend}
                className="border border-gray-300 bg-gray-50 rounded-md h-8 hover:bg-gray-200 duration-100 w-full mt-1 mb-1"
              >
                Add Social Account
              </button>
            </div>

            <div className="flex space-x-1.5 w-full max-w-xs sm:max-w-sm pt-1">
              <button
                type="submit"
                className="border border-rose-400 bg-rose-400 text-white rounded-md h-8 hover:bg-rose-500 duration-100 w-1/6"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="border border-gray-300 bg-gray-50 rounded-md h-8 hover:bg-gray-200 duration-100 w-1/4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="border border-rose-200 bg-rose-50 rounded-md h-8 hover:bg-rose-100 duration-100 mb-6 sm:w-full w-full md:w-64 lg:w-72"
            onClick={handleEditClick}
          >
            Edit profile
          </button>
        )}
      </div>
    </form>
  )
}

export default SideBarForm
