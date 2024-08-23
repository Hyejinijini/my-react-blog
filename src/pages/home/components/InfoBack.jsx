import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

// icons
import { FaArrowLeft } from 'react-icons/fa'
import { FiSave, FiEdit2 } from 'react-icons/fi'

// css
import styles from '@assets/styles/css/home/selfInfo.module.css'

const InfoBack = ({ isFlipped, handleCardClick }) => {
  // react-hook-form 사용하여 폼 상태 관리
  const { register, handleSubmit } = useForm()
  const [isEditing, setIsEditing] = useState(false)

  // 프로필 데이터 상태
  const [profileData, setProfileData] = useState({
    name: '',
    birthDate: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    // 로컬스토리지에서 저장된 프로필데이터를 가져옴
    const savedData = JSON.parse(localStorage.getItem('profileData'))

    // 저장된 데이터가 있으면 상태로 설정, 없으면 기본 프로필 데이터를 사용
    if (savedData) {
      setProfileData(savedData)
    } else {
      // 기본값
      setProfileData({
        name: '방혜진',
        birthDate: '2001-08-13',
        email: 'qkdgpwls001@gmail.com',
        phone: '010-7370-7066'
      })
    }
  }, [])

  // 폼 제출 시 호출되는 함수
  const onSubmit = (data) => {
    setProfileData(data)
    localStorage.setItem('profileData', JSON.stringify(data)) // 로컬스토리지에 데이터 저장
    setIsEditing(false)
  }

  // 수정 폼 활성화 함수
  const handleEditClick = () => setIsEditing(true)

  // 프로필 저장 및 수정 폼 비활성화 함수
  const handleSaveClick = () => {
    handleSubmit(onSubmit)() // 폼 제출 함수 호출
  }

  // 필드별로 아이콘을 렌더링하는 함수
  const renderProfileIcon = (key) => {
    switch (key) {
      case 'name':
        return 'N'
      case 'birthDate':
        return 'B'
      case 'email':
        return 'M'
      case 'phone':
        return 'P'
      default:
        return ''
    }
  }

  return (
    // 애니메이션 효과가 적용된 div
    <motion.div
      className={`${styles.cardBack} p-4 flex flex-col justify-between items-center rounded-lg bg-white ${isFlipped ? 'h-full' : 'h-96'}`}
      // 카드의 뒷면을 숨기고 회전시킴
      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      animate={{ opacity: isFlipped ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* 프로필 정보 */}
      <div className="w-full mb-4">
        {/* 상단 바: 타이틀과 아이콘 */}
        <div className="flex items-center justify-between mb-4">
          {/* 타이틀 */}
          <div className="text-lg font-bold text-rose-600">HYEHYE / 프로필</div>

          {/* 아이콘과 수정 버튼 */}
          <div className="flex items-center">
            {/* 돌아가기 버튼 */}
            <FaArrowLeft className={`${styles.arrowIcon} cursor-pointer text-rose-600`} onClick={handleCardClick} />

            {/* 수정/저장 버튼 */}
            <button onClick={isEditing ? handleSaveClick : handleEditClick} className={`ml-4`}>
              {isEditing ? (
                <FiSave className="hover:text-rose-500 duration-200 hover:scale-110" />
              ) : (
                <FiEdit2 className="hover:text-rose-500 duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {/* 프로필 데이터 폼 */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {isEditing ? (
            // 수정 모드일 때 렌더링되는 폼
            <div className="border-t border-rose-200 p-1.5">
              <ul className="space-y-4">
                {Object.keys(profileData).map((key) => (
                  <li key={key} className={styles.profileItem}>
                    {/* 필드 아이콘 */}
                    <div className={styles.profileIcon}>
                      <span className="text-lg font-bold p-4">{renderProfileIcon(key)}</span>
                    </div>

                    {/* 입력 필드 */}
                    <input
                      type="text"
                      name={key}
                      {...register(key)} // react-hook-form의 register 함수로 필드 등록
                      defaultValue={profileData[key]} // 기본값으로 현재 프로필 데이터 설정
                      className="text-sm text-gray-800 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-rose-500"
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            // 수정 모드가 아닐 때 프로필 데이터 표시
            <div className="p-1.5 border-t border-rose-200">
              <ul className="space-y-4">
                <li className={styles.profileItem}>
                  <div className={styles.profileIcon}>
                    <span className="text-lg font-bold">N</span>
                  </div>
                  <span className="text-sm text-gray-800">이름: {profileData.name}</span>
                </li>
                <li className={styles.profileItem}>
                  <div className={styles.profileIcon}>
                    <span className="text-lg font-bold">B</span>
                  </div>
                  <span className="text-sm text-gray-800">생년월일: {profileData.birthDate}</span>
                </li>
                <li className={styles.profileItem}>
                  <div className={styles.profileIcon}>
                    <span className="text-lg font-bold">M</span>
                  </div>
                  <span className="text-sm text-gray-800 hover:underline hover:text-rose-400">
                    메일: <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                  </span>
                </li>
                <li className={styles.profileItem}>
                  <div className={styles.profileIcon}>
                    <span className="text-lg font-bold">P</span>
                  </div>
                  <span className="text-sm text-gray-800">번호: {profileData.phone}</span>
                </li>
              </ul>
            </div>
          )}
        </form>
      </div>
    </motion.div>
  )
}

export default InfoBack
