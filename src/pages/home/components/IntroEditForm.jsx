import { useState, useEffect } from 'react'
import styles from '@assets/styles/css/home/intro.module.css'

const IntroEditForm = ({ isEditing }) => {
  // 로컬스토리지에서 초기 데이터 로드
  const loadInitialData = () => {
    const savedData = localStorage.getItem('introData')
    if (savedData) {
      return JSON.parse(savedData)
    } else {
      // 로컬스토리지에 데이터가 없을 때의 기본값
      return { title: '🍀 안녕하세요', content: '안녕하세요 :) 저는 방혜진입니다.' }
    }
  }

  // 초기 상태 설정
  const [introData, setIntroData] = useState(loadInitialData())
  const [title, setTitle] = useState(introData.title)
  const [content, setContent] = useState(introData.content)

  useEffect(() => {
    setTitle(introData.title)
    setContent(introData.content)
  }, [introData])

  const handleSave = () => {
    const updatedData = {
      title,
      content
    }

    // 객체 형태로 데이터 저장
    localStorage.setItem('introData', JSON.stringify(updatedData))
  }

  useEffect(() => {
    handleSave()
  }, [title, content])

  // 한 글자씩 분리하기
  const getAnimatedText = (text) => {
    return Array.from(text).map((char, index) => {
      // 공백 문자는 특수하게 처리하여 출력
      if (char === ' ') {
        return (
          <span key={index} className={styles.animatedText}>
            &nbsp;
          </span>
        )
      }
      return (
        <span key={index} className={styles.animatedText}>
          {char}
        </span>
      )
    })
  }

  return (
    <>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="block border-b border-rose-200 text-2xl font-bold w-full mb-3 p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border-b border-rose-200 p-2 h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <h2 className="font-bold text-2xl pb-2 mb-1 p-2">
            {getAnimatedText(introData.title)}
            <hr className="border-b-1 border-rose-100 mt-1" />
          </h2>
          <p className="px-2 py-2">{content}</p>
        </div>
      )}
    </>
  )
}

export default IntroEditForm
