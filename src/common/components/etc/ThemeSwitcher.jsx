import React from 'react'
import useThemeStore from '@store/useThemeStore.js'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore()

  // 테마를 토글하는 함수
  const toggleTheme = () => {
    // 현재 테마가 'light'인 경우 'dark'로 변경하고, 그렇지 않은 경우 'light'로 변경
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="absolute transform z-10 top-2 right-2">
      <button onClick={toggleTheme}>{theme === 'light' ? 'dark' : 'light'} 모드로 변경하기</button>
    </div>
  )
}

export default ThemeSwitcher
