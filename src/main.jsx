import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import router from '@/router.jsx'

import '@assets/styles/css/index.css'

import useThemeStore from '@store/useThemeStore.js'
import ThemeSwitcher from '@common/components/etc/ThemeSwitcher.jsx'

async function enableMocking() {
  // if (process.env.NODE_ENV !== 'development') {
  //   return
  // }
  const { worker } = await import('./mocks/browser.js')

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/')) {
        return
      }

      print.warning()
    }
  })
}

const TypingText = () => {
  // 애니메이션의 단계를 관리하는 상태(타이핑 중인지, 확대/축소 애니메이션 중인지)
  const [animationStage, setAnimationStage] = useState('typing')

  // 타이핑 애니메이션에 사용할 텍스트
  const text = 'HYEHYE'
  const letters = text.split('') // 텍스트를 글자 단위로 분리

  useEffect(() => {
    // 현재 애니메이션 단계가 'typing' 일 때 실행
    if (animationStage === 'typing') {
      // 타이핑 애니메이션이 완료된 후 'scaling' 애니메이션으로 전환되는 타이머 설정
      const timer = setTimeout(() => setAnimationStage('scaling'), text.length * 300 + 3000)
      return () => clearTimeout(timer) // 타이머 정리
    }
  }, [animationStage, text.length])

  return (
    <motion.div
      className="loading-animation"
      style={{
        fontSize: '3rem', // 글자 크기
        color: '#333', // 글자 색상
        whiteSpace: 'nowrap', // 텍스트 줄 바꿈 방지
        overflow: 'hidden', // 텍스트가 부모 컨테이너를 넘지 않도록 설정
        letterSpacing: '1em' // 글자 간격 조정
      }}
    >
      {letters.map((letter, index) => {
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20, scale: 0.8 }} // 각 글자가 처음에 보이지 않도록 설정(투명도 0, 위치 약간 왼쪽, 크기 축소)
            animate={{ opacity: 1, x: 0, scale: 1 }} // 글자가 화면에 나타나며 자연스럽게 위치, 크기, 투명도가 변경됨
            transition={{
              delay: index * 0.3, // 각 글자가 나타나는 타이밍을 약간씩 지연시켜 타이핑 효과 연출
              duration: 0.2, // 글자가 화면에 나타나는 시간
              type: 'spring', // 자연스럽고 부드러운 스프링 애니메이션 사용
              stiffness: 200 // 스프링 애니메이션의 강도 설정
            }}
            exit={{ opacity: 0, scale: 0.8 }} // 애니메이션 종료 시 글자가 사라지면서 축소됨
            style={{
              display: 'inline-block', // 애니메이션을 위해 글자를 인라인 블록으로 처리
              scale: animationStage === 'scaling' ? [1, 1.2, 1] : 1 // 타이핑 후 확대/축소 애니메이션 적용
            }}
          >
            {letter}
          </motion.span>
        )
      })}
    </motion.div>
  )
}

const Main = () => {
  const [loading, setLoading] = useState(true) // 로딩 상태 관리
  const { isDarkMode } = useThemeStore()

  useEffect(() => {
    // 로딩 화면이 3초 후 종료되도록 타이머 설정
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer) // 타이머 정리
  }, [])

  useEffect(() => {
    // 다크 모드 상태가 변경될 때마다 Tailwind의 dark 클래스를 html 태그에 추가/제거
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''} dark:bg-customGray dark:text-customWhite`}>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            className="loading-screen"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff1f2' // 로딩 화면 배경색 (연한 핑크)
            }}
            initial={{ opacity: 1, scale: 1 }} // 로딩 화면이 처음 나타날 때 설정
            animate={{ opacity: 1, scale: 1 }} // 로딩 화면 동안 유지될 애니메이션 상태
            exit={{ opacity: 0, scale: 1.1, transition: { duration: 1 } }} // 로딩 종료 시 서서히 사라지면서 약간 확대되는 애니메이션
          >
            {/* 위에서 정의한 타이핑 애니메이션 컴포넌트 */}
            <TypingText />
          </motion.div>
        ) : (
          <>
            <RouterProvider router={router} />
            <ThemeSwitcher />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

enableMocking().then(() => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <Main />
      </React.StrictMode>
    )
  }
})
