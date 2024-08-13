import { Link, useLocation } from 'react-router-dom'
import { useRequestHook } from '@common/hooks/useDataFetchHooks.js'
import { ABOUT_LIST_URL } from '@api/keys/about/url.js'

import { AiOutlineHome } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'

const HeaderList = () => {
  const location = useLocation()
  const url = ABOUT_LIST_URL // 데이터 URL

  const { state: items } = useRequestHook(url)

  return (
    <div className="px-4">
      {/* 네비게이션 링크들 */}
      <nav>
        <ul className="flex text-base font-medium gap-2">
          <li className={`py-2 ${location.pathname === '/' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <AiOutlineHome className="text-lg" />
              {/* Home 링크 */}
              <Link to="/">Home</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '/about' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <FaRegBookmark className="text-md" />
              {/* About 링크 */}
              <Link to="/about">
                About
                <span
                  className="badge text-gray-600 font-bold bg-rose-200 ml-2 rounded-full border border-rose-200 text-sm px-1.5
        "
                >
                  {items.length}
                </span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderList
