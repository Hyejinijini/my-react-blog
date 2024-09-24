import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

// icons
import { HiOutlineLink } from 'react-icons/hi'

const SideBarForm = ({ profile, editMode, setEditMode, setProfile }) => {
  // react-hook-form 사용
  // 1. register: 폼 필드를 등록하고 상태를 관리 -> register 로 폼 상태를 등록하면 폼 제출 시 서버로 전송될 데이터의 key 가 된다.
  // 2. handleSubmit: 폼 제출 시 호출될 함수를 처리
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  // 소셜 계정 링크를 저장하는 state
  const [links, setLinks] = useState([])

  // 초기화
  // editMode가 true일 때 profile.links로 links 상태를 설정
  // 즉, 수정 폼이 활성화될 때 프로필의 소셜 계정 링크를 links 상태로 설정
  useEffect(() => {
    if (editMode) {
      setLinks(profile.links || [])
    }
  }, [editMode, profile.links])

  // 업데이트
  // profile 이 변경되면 profile.links 의 상태를 links 상태로 설정
  useEffect(() => {
    if (profile) {
      setLinks(profile.links || [])
    }
  }, [profile])

  // 폼 제출 처리 함수
  // 폼 제출 시 호출되며, 폼 데이터를 받아 profile를 업데이트하고 수정 모드를 비활성화함
  const onSubmit = (data) => {
    // 기존 profile 객체에 폼 데이터를 병합하여 새로운 객체를 만듦
    const updatedProfile = {
      ...profile,
      ...data,
      links: links.length ? links : profile.links
    }
    setProfile(updatedProfile)
    localStorage.setItem('profile', JSON.stringify(updatedProfile)) // 로컬스토리지에 저장

    // 수정 폼 비활성화
    setEditMode(false)
  }

  // 수정 폼 활성화
  const handleEditClick = () => {
    setEditMode(true)
  }

  // 수정 폼 비활성화 및 링크 초기화
  const handleCancelClick = () => {
    setEditMode(false)
    setLinks(profile.links || [])
  }

  // 소셜 링크 삭제
  const handleRemoveClick = (index) => {
    // index 가 일치하지 않는 링크만 남기는 새로운 배열을 생성하고, setLinks 를 호출하여 상태를 업데이트 한다. -> 즉, index 가 일치하는 링크만 리스트에서 filter 되어 사라지게 된다.
    setLinks(links.filter((_, i) => i !== index))
  }

  // 입력 필드에서 소셜 링크 추가
  const handleLinkChange = (index, e) => {
    const updatedLinks = [...links]
    updatedLinks[index].url = e.target.value
    setLinks(updatedLinks)
  }

  // 다음 ID 생성
  const getNextId = () => {
    if (links.length === 0) return '1'
    // 현재 링크들 중 가장 큰 id 값을 찾고, 1을 더하여 새 id 를 생성한 후 문자열로 변환하여 반환
    return (Math.max(...links.map((link) => parseInt(link.id, 10))) + 1).toString()
  }

  // 소셜 링크 입력 필드 추가
  const socialAppend = () => {
    const newId = getNextId()
    setLinks([...links, { id: newId, url: '' }])
  }

  return (
    // 폼 제출 이벤트 처리
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${editMode ? 'mr-6' : ''} dark:text-customWhite`}>
        {editMode ? (
          <div className="flex flex-col items-center space-y-1 text-sm">
            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-customGrayMuted">Name</label>
              <input
                id="name"
                type="text"
                // 현재 프로필의 이름을 기본값으로 설정
                defaultValue={profile.name}
                placeholder="Name"
                className="border border-gray-300 dark:border-customGrayMid focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:focus:border-customRoseMid dark:bg-customGrayDark rounded-md p-2 px-3 py-1 mb-2 w-full"
                // register 함수를 사용하여 입력 필드를 폼 상태에 등록
                {...register('name', {
                  required: '이름을 입력해 주세요! 이 필드는 필수입니다.'
                })}
              />
              {errors.name && <p className="text-red-500 text-xs mb-2">{errors.name.message}</p>}
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-customGrayMuted">Bio</label>
              <textarea
                id="bio"
                // 현재 프로필의 바이오를 기본값으로 설정
                defaultValue={profile.bio}
                placeholder="Add a bio"
                className="border dark:border-customGrayMid rounded-md h-20 p-2 px-3 mb-2 w-full focus:outline-none dark:bg-customGrayDark focus:ring-rose-500 focus:border-rose-500 dark:focus:border-customRoseMid"
                // register 함수를 사용하여 입력 필드를 폼 상태에 등록
                {...register('bio')}
              />
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-customGrayMuted">
                Profile Image URL
              </label>
              <input
                id="image"
                type="url"
                // 현재 프로필 이미지 URL을 기본값으로 설정
                defaultValue={profile.profileImage}
                placeholder="Profile Image URL"
                className="border dark:border-customGrayMid border-gray-300 rounded-md p-2 mb-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:focus:border-customRoseMid dark:bg-customGrayDark"
                // 필수 입력 필드로 설정
                required
                // register 함수를 사용하여 입력 필드를 폼 상태에 등록
                {...register('image', {
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: '올바른 URL을 입력해 주세요!'
                  }
                })}
              />
              {errors.image && <p className="text-red-500 text-xs mb-2">{errors.image.message}</p>}
            </div>

            <div className="w-full max-w-xs sm:max-w-sm">
              <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-customGrayMuted">
                Social accounts
              </label>
              {links.map((link, index) => (
                <div key={link.id} className="flex items-center mb-2 space-x-2">
                  <HiOutlineLink className="text-gray-600 text-lg dark:text-customWhite" />
                  <input
                    // 고유한 식별자인 index 를 사용하여 각 링크 입력 필드에 고유한 id 를 부여한다.
                    id={`url-${index}`}
                    type="url"
                    // 현재 링크의 URL 값을 입력 필드에 표시
                    value={link.url}
                    onChange={(e) => handleLinkChange(index, e)}
                    placeholder="Link URL"
                    className="border dark:border-customGrayMid rounded-md p-2 px-3 py-1 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500 dark:focus:border-customRoseMid dark:bg-customGrayDark"
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
                className="dark:text-customGray border border-gray-300 dark:border-customGrayMid bg-gray-50 dark:bg-customGrayMuted rounded-md h-8 hover:bg-gray-200 dark:hover:bg-[#A0A0A0] dark:hover:text-[#FFFFFF] duration-100 w-full mt-1 mb-1"
              >
                Add Social Account
              </button>
            </div>

            <div className="flex space-x-1.5 w-full max-w-xs sm:max-w-sm pt-1">
              {/* 폼 데이터를 제출하여 프로필을 업데이트 */}
              <button
                type="submit"
                className="border border-rose-400 dark:border-customRoseMuted bg-rose-400 dark:bg-customRoseMid text-white rounded-md h-8 hover:bg-rose-500 dark:hover:bg-[#D77A85] duration-100 w-1/6"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleCancelClick}
                className="border border-gray-300 dark:border-customGrayMid bg-gray-50 dark:bg-customGrayMuted rounded-md h-8 hover:bg-gray-200 dark:hover:bg-[#A0A0A0] dark:text-customGray dark:hover:text-[#FFFFFF] duration-100 w-1/4"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            className="dark:text-customWhite border border-rose-200 dark:border-customRoseMuted bg-rose-50 dark:bg-customRoseMid rounded-md h-8 hover:bg-rose-100 dark:hover:bg-customRoseDark duration-100 mb-6 sm:w-full w-full md:w-64 lg:w-72 px-4"
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
