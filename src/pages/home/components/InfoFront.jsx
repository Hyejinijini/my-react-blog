import { motion } from 'framer-motion'

// icons
import { FaArrowRight } from 'react-icons/fa'

// css
import styles from '@assets/styles/css/home/selfInfo.module.css'

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
        <img src="/src/assets/images/짱구.gif" alt="짱구 움짤" className="w-60" />
        <h2 className="text-xl font-semibold mb-3 pt-6">🌈🍓🎀 안녕하세요 🌸💘🎈</h2>
        <p className="mb-1">저는 방혜진입니다!</p>
        <p className="text-base text-rose-300 mb-4 gove">소개를 보려면 클릭하세요.</p>
        <FaArrowRight className={`${styles.arrowIcon} ${styles.front} cursor-pointer`} onClick={handleCardClick} />
      </motion.div>
    </>
  )
}

export default InfoFront
