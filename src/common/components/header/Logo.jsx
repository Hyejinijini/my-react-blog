import useThemeStore from '@store/useThemeStore.js'

const Logo = ({ className }) => {
  const { isDarkMode } = useThemeStore()

  return (
    <div className="ml-1">
      {isDarkMode ? (
        <img src="src/assets/images/파비콘-다크.webp" alt="다크모드 로고 이미지" className={className}></img>
      ) : (
        // 로고 이미지 부분
        <img src="/HYEHYE.svg" alt="로고 이미지" className={className} />
      )}
    </div>
  )
}

export default Logo
