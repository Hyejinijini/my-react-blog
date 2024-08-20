import { useState } from 'react'
import { motion } from 'framer-motion'

// css
import styles from '@assets/styles/css/home/selfInfo.module.css'

// components
import InfoFront from '@pages/home/components/InfoFront.jsx'
import InfoBack from '@pages/home/components/InfoBack.jsx'
import TechStack from '@pages/home/components/TechStack.jsx'

const MyInfo = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev)
  }

  console.log('Rendering SelfIntro: isFlipped =', isFlipped) // 디버깅 로그

  return (
    <div className="relative w-full h-96">
      {/* 애니메이션이 적용된 div */}
      <motion.div
        className={`${styles.card} ${isFlipped ? styles.cardFlipped : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
        transition={{ duration: 0.6 }}
      >
        {/* 앞면 */}
        <InfoFront isFlipped={isFlipped} handleCardClick={handleCardClick} />

        {/* 뒷면 */}
        <InfoBack isFlipped={isFlipped} handleCardClick={handleCardClick} />
      </motion.div>

      {/* 기술 스택 부분 */}
      {!isFlipped && <TechStack />}
    </div>
  )
}

export default MyInfo
