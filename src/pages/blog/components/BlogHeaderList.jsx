import { Link, useLocation, useParams } from 'react-router-dom'
import { IoIosCode } from 'react-icons/io'
import { GoIssueOpened, GoGitPullRequest, GoCommentDiscussion } from 'react-icons/go'
import { MdSlowMotionVideo } from 'react-icons/md'
import { VscGithubProject } from 'react-icons/vsc'
import { IoBookOutline } from 'react-icons/io5'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'

const BlogHeaderList = () => {
  const location = useLocation()
  const { id } = useParams() // URL의 id 파라미터 가져오기

  return (
    <div className="px-4">
      {/* 네비게이션 링크들 */}
      <nav>
        <ul className="flex text-base font-medium gap-2 overflow-x-auto">
          <li
            className={`py-2 ${
              location.pathname === `/about/${id}/detail/${id}` ? 'border-b-2 border-rose-400 font-bold' : ''
            }`}
          >
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <IoIosCode className="text-xl" />
              {/* Code 링크 */}
              <Link to={`/about/${id}/detail/${id}`}>Code</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <GoIssueOpened className="text-md" />
              {/* Issues 링크 */}
              <Link to="#">Issues</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <GoGitPullRequest className="text-lg" />
              {/* Pull requests 링크 */}
              <Link to="#">Pull requests</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <GoCommentDiscussion className="text-lg" />
              {/* Discussions 링크 */}
              <Link to="#">Discussions</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <MdSlowMotionVideo className="text-lg" />
              {/* Actions 링크 */}
              <Link to="#">Actions</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <VscGithubProject className="text-lg" />
              {/* Projects 링크 */}
              <Link to="#">Projects</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <IoBookOutline className="text-lg" />
              {/* Wiki 링크 */}
              <Link to="#">Wiki</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <AiOutlineSecurityScan className="text-lg" />
              {/* Security 링크 */}
              <Link to="#">Security</Link>
            </div>
          </li>

          <li className={`py-2 ${location.pathname === '#' ? 'border-b-2 border-rose-400 font-bold' : ''}`}>
            <div className="flex items-center hover:bg-rose-100 hover:rounded-md duration-100 p-1.5 gap-1.5 pb-1">
              <BsGraphUp className="text-lg" />
              {/* Insights 링크 */}
              <Link to="#">Insights</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default BlogHeaderList
