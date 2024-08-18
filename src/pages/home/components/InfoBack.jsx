import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// icons
import { FaArrowLeft } from 'react-icons/fa'
import { FiSave, FiEdit2 } from 'react-icons/fi'

// css
import styles from '@assets/styles/css/home/selfInfo.module.css'

const InfoBack = ({ isFlipped, handleCardClick }) => {
  const [isEditing, setIsEditing] = useState(false)

  // 프로필 데이터
  const [profileData, setProfileData] = useState({
    name: '',
    birthDate: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('profileData'))
    if (savedData) {
      setProfileData(savedData)
    } else {
      setProfileData({
        name: '방혜진',
        birthDate: '2001-08-13',
        email: 'qkdgpwls001@gmail.com',
        phone: '010-7370-7066'
      })
    }
  }, [])

  const handleEditClick = () => setIsEditing(true)

  const handleSaveClick = () => {
    localStorage.setItem('profileData', JSON.stringify(profileData))
    setIsEditing(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }

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
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-rose-600">HYEHYE / 소개</div>
          <div className="flex items-center">
            <FaArrowLeft className={`${styles.arrowIcon} cursor-pointer text-rose-600`} onClick={handleCardClick} />
            <button onClick={isEditing ? handleSaveClick : handleEditClick} className={`ml-4`}>
              {isEditing ? (
                <FiSave className="hover:text-rose-500 duration-200 hover:scale-110" />
              ) : (
                <FiEdit2 className="hover:text-rose-500 duration-200 hover:scale-110" />
              )}
            </button>
          </div>
        </div>

        {isEditing ? (
          <div className="border-t border-rose-200 p-1.5">
            <ul className="space-y-4">
              {Object.keys(profileData).map((key) => (
                <li key={key} className={styles.profileItem}>
                  <div className={styles.profileIcon}>
                    <span className="text-lg font-bold p-4">{renderProfileIcon(key)}</span>
                  </div>
                  <input
                    type="text"
                    name={key}
                    value={profileData[key]}
                    onChange={handleChange}
                    className="text-sm text-gray-800 w-full p-2 border border-gray-300 rounded-lg"
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
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
                <span className="text-sm text-gray-800">
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
      </div>
    </motion.div>
  )
}

export default InfoBack
