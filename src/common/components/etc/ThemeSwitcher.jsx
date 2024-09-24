import React from 'react'
import useThemeStore from '@store/useThemeStore.js'

const ThemeSwitcher = () => {
  const { isDarkMode, toggleDarkMode } = useThemeStore()

  return (
    // 다크 모드 상태에 따라 클래스 이름 변경
    <div className="absolute transform z-10 top-2 right-2">
      <button onClick={toggleDarkMode}>
        {/* 현재 모드에 따라 버튼 텍스트 변경 */}
        {isDarkMode ? 'light 모드로 전환' : 'dark 모드로 전환'}
      </button>
    </div>
  )
}

export default ThemeSwitcher
