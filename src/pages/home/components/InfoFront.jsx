import { motion } from 'framer-motion'

// icons
import { FaArrowRight } from 'react-icons/fa'

// css
import styles from '@assets/styles/css/home/selfInfo.module.css'

// components
import FrontImage from '@pages/home/components/FrontImage.jsx'
import FrontIntro from '@pages/home/components/FrontIntro.jsx'

const InfoFront = ({ isFlipped, handleCardClick }) => {
  return (
    <>
      {/* 앞면 */}
      <motion.div
        className={`${styles.cardFront} flex flex-col items-center justify-center p-6`}
        // 카드가 뒤집힐 때 뒷면이 보이지 않도록 설정
        style={{ backfaceVisibility: 'hidden' }}
        // 카드가 뒤집힌 상태일 때 앞면의 투명도를 0 으로 설정하여 보이지 않게 하고, 앞면이 보일 때는 투명도를 1로 설정하여 보이게 함.
        animate={{ opacity: isFlipped ? 0 : 1 }}
      >
        {/* 이미지: 짱구 움짤 */}
        <FrontImage />

        {/* 인사말과 소개글 */}
        <FrontIntro />

        {/* 아이콘 */}
        <FaArrowRight className={`${styles.arrowIcon} ${styles.front} cursor-pointer`} onClick={handleCardClick} />
      </motion.div>
    </>
  )
}

export default InfoFront
