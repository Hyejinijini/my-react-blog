import { Link, useLocation } from 'react-router-dom'

// icons
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'
import { FaRegCalendarAlt } from 'react-icons/fa'

const HeaderList = () => {
  // 현재 URL 정보를 가져오기 위해 useLocation 사용
  const location = useLocation()

  return (
    <div className="px-4">
      {/* 네비게이션 링크들 */}
      <nav>
        <ul className="flex text-base font-medium gap-2">
          {/* Home 링크 */}
          <li className={`py-2 ${location.pathname === '/' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <AiOutlineHome className="text-lg" />
              {/* Home 링크를 클릭하면 "/" 경로로 이동합니다. */}
              <Link to="/">Home</Link>
            </div>
          </li>

          {/* Guestbook 링크 */}
          <li className={`py-2 ${location.pathname === '/guestbook' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <FaRegBookmark className="text-md" />
              {/* Guestbook 링크를 클릭하면 "/guestbook" 경로로 이동합니다. */}
              <Link to="/guestbook">Guestbook</Link>
            </div>
          </li>

          {/* Calendar 링크 */}
          <li className={`py-2 ${location.pathname === '/calendar' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <FaRegCalendarAlt className="text-lg" />
              {/* Calendar 링크를 클릭하면 "/calendar" 경로로 이동합니다. */}
              <Link to="/calendar">Calendar</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HeaderList
