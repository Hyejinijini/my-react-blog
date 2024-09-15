import { create } from 'zustand'

// Zustand를 사용하여 테마 상태를 관리하기 위한 스토어 생성
const useThemeStore = create((set) => ({
  // 현재 테마 상태를 저장하는 객체
  theme: 'light', // 기본 테마를 'light'로 설정

  // 테마를 변경하는 함수
  setTheme: (newTheme) => set({ theme: newTheme }) // 새로운 테마로 상태를 업데이트
}))

export default useThemeStore
