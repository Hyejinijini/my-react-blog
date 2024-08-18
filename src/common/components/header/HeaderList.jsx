import { Link, useLocation } from 'react-router-dom'
import { useRequestHook } from '@common/hooks/useDataFetchHooks.js'

// data URL
import { ABOUT_LIST_URL } from '@api/keys/about/url.js'

// icons
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'

const HeaderList = () => {
  // 현재 URL 정보를 가져오기 위해 useLocation 사용
  const location = useLocation()

  // data URL
  const url = ABOUT_LIST_URL

  // custom hook 사용
  const { state: items } = useRequestHook(url)

  return (
    <div className="px-4">
      {/* 네비게이션 링크들 */}
      <nav>
        <ul className="flex text-base font-medium gap-2">
          {/* 현재 URL 이 "/" 일 때(즉, home 일 때) css 설정 */}
          <li className={`py-2 ${location.pathname === '/' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <AiOutlineHome className="text-lg" />
              {/* Home 링크 */}
              <Link to="/">Home</Link>
            </div>
          </li>

          {/* 현재 URL 이 "blog" 일 때(즉, Blog 일 때) css 설정 */}
          <li className={`py-2 ${location.pathname === '/blog' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <FaRegBookmark className="text-md" />
              {/* Blog 링크 */}
              <Link to="/blog">
                Blog
                <span
                  className="badge text-gray-600 font-bold bg-rose-200 ml-2 rounded-full border border-rose-200 text-sm px-1.5
        "
                >
                  {/* custom hook 으로 가져온 data 의 길이를 이용해서 배지느낌 만들기 */}
                  {items.length}
                </span>
              </Link>
            </div>
          </li>
          {/* 현재 URL 이 "/" 일 때(즉, home 일 때) css 설정 */}
          <li className={`py-2 ${location.pathname === '/calendar' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <FaRegCalendarAlt className="text-lg" />
              {/* Calendar 링크 */}
              <Link to="/">Calendar</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderList
