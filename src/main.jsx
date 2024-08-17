import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import router from '@/router.jsx'

import '@assets/styles/css/index.css'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser.js')

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/')) {
        console.log('/api/ 가 포함되지 않은 요청 url', request.url)
        return
      }

      print.warning()
    }
  })
}

function Main() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000) // 3초 후 로딩 종료
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          key="loading"
          className="loading-screen bg-black flex justify-center items-center h-screen"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1, transition: { duration: 1 } }} // 자연스럽게 흐려지면서 사라짐
        >
          <TypingText />
        </motion.div>
      ) : (
        <RouterProvider router={router} />
      )}
    </AnimatePresence>
  )
}

function TypingText() {
  const [animationStage, setAnimationStage] = useState('typing') // 애니메이션 단계 상태
  const text = 'HYEHYE'
  const letters = text.split('')

  useEffect(() => {
    if (animationStage === 'typing') {
      const timer = setTimeout(() => setAnimationStage('scaling'), text.length * 300 + 3000) // 타이핑 후 확대/축소 애니메이션 시작
      return () => clearTimeout(timer)
    }
  }, [animationStage, text.length])

  return (
    <motion.div className="loading-animation">
      {letters.map((letter, index) => {
        const isLastLetter = index === letters.length - 1 // 마지막 글자인지 확인
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: index * 0.3, // 글자마다 조금씩 지연
              duration: 0.2, // 각 글자가 나타나는 시간
              type: 'spring',
              stiffness: 200 // spring 애니메이션의 강도
            }}
            exit={{ opacity: 0, scale: 0.8 }} // 타이핑 애니메이션 끝난 후
            style={{
              display: 'inline-block', // 확대/축소 애니메이션이 잘 적용되도록
              scale: animationStage === 'scaling' ? [1, 1.2, 1] : 1,
              y: isLastLetter ? [0, -10, 0] : 0 // 마지막 글자에 달랑달랑 애니메이션 적용
            }}
          >
            {letter}
          </motion.span>
        )
      })}
    </motion.div>
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
