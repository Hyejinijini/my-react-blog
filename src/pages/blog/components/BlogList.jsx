import { Link } from 'react-router-dom'

import { useAboutListHook } from '@pages/blog/hooks/useDataFetchHooks.js'
import useFilteredListHook from '@/pages/blog/hooks/useFilteredListHook.js'

const BlogList = ({ searchTerm }) => {
  const list = useAboutListHook() // 목록 데이터 가져오기
  const filteredList = useFilteredListHook(searchTerm, list) // 필터링된 목록 사용

  return (
    <>
      {filteredList.length > 0 ? (
        filteredList.map((item, id) => (
          <div key={id} className="border-b border-rose-200 py-4">
            <ul>
              <li>
                <div className="flex gap-3 py-2 items-center mt-2">
                  <Link
                    to={`/about/${encodeURIComponent(item.title)}`}
                    className="font-bold text-xl text-rose-500 hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="border border-rose-200 rounded-2xl px-2 pb-1 text-sm">{item.label}</p>
                </div>
                <p className="pb-4">{item.content}</p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="border border-gray-200 rounded-full w-4 h-4 bg-red-600"></span>
                  <p className="text-gray-600 text-sm">{item.skill}</p>
                </div>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p className="flex items-center justify-center mt-20 font-bold text-xl text-gray-600">
          HYEHYE doesn't have any list that match.
        </p> // 필터링된 목록이 없을 때 표시
      )}
    </>
  )
}

export default BlogList
