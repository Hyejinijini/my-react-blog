import { create } from 'zustand'

// Zustand를 사용하여 테마 상태를 관리하기 위한 스토어 생성
const useThemeStore = create((set) => ({
  // 현재 테마 상태를 저장하는 객체
  isDarkMode: false, // 초기 다크 모드 상태
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })) // 다크 모드 토글 함수
}))

export default useThemeStore
