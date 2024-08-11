import { useState} from 'react'

import AboutSearch from '@/pages/about/components/AboutSearch.jsx'
import AboutList from '@/pages/about/components/AboutList.jsx'

const AboutMain = () => {
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가

  return (
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2">
      {/* 검색창 추가 */}
      <AboutSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* 목록 조회 */}
      <AboutList searchTerm={searchTerm} />
    </main>
  )
}

export default AboutMain
