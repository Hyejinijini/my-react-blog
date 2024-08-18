import { useState } from 'react'

import BlogSearch from '@/pages/blog/components/BlogSearch.jsx'
import BlogList from '@/pages/blog/components/BlogList.jsx'

const BlogMain = () => {
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가

  return (
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2">
      {/* 목록 조회 */}
      <BlogList searchTerm={searchTerm} />
    </main>
  )
}

export default BlogMain
