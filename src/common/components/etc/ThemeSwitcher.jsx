import React from 'react'
import useThemeStore from '@store/useThemeStore.js'

// icons
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const ThemeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore()

  return (
    // 다크 모드 상태에 따라 클래스 이름 변경
    <div className="absolute transform z-10 top-4 right-4">
      <button onClick={toggleDarkMode}>
        {/* 현재 모드에 따라 버튼 텍스트 변경 */}
        {isDarkMode ? (
          <MdOutlineLightMode className="p-2 w-10 h-10 text-2xl font-bold border border-customGrayMid rounded-full bg-customGrayMid text-customWhite hover:scale-110 duration-200" />
        ) : (
          <MdDarkMode className="p-2 w-10 h-10 text-2xl font-bold border border-rose-200 rounded-full bg-rose-200 text-rose-400 hover:scale-110 duration-200" />
        )}
      </button>
    </div>
  )
}

export default ThemeSwitcher
