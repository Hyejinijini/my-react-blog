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
        <img src="/src/assets/images/짱구.gif" alt="짱구 움짤" className="w-52" />
        <h2 className="text-xl font-semibold mb-3 pt-4">🌈🍓🎀 안녕하세요 🌸💘🎈</h2>
        <p className="mb-1 text-sm text-center">
          저는 프론트엔드 개발자로 성장하기 위해 열심히 공부하고 있는 방혜진입니다. <br />
          새로운 기술을 배우고, 실력을 키워나가는 과정에서 꾸준히 힘쓰고 있으며,
          <br />
          더욱 멋진 웹을 만들기 위해 노력하고 있습니다.
        </p>
        <p className="relative inline-block text-base text-rose-300 pt-1 mb-1 gove">
          <span>프로필 보러가기</span>
        </p>
        <FaArrowRight className={`${styles.arrowIcon} ${styles.front} cursor-pointer`} onClick={handleCardClick} />
      </motion.div>
    </>
  )
}

export default InfoFront
