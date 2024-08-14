// icons
import { HiOutlineLink } from 'react-icons/hi'

const GoToLink = ({ editMode, profile }) => {
  return (
    <>
      {/* 수정폼이 false 일 때만 link 를 보여준다.  */}
      {!editMode && profile.links && (
        <ul className="list-none space-y-3 md:w-64 text-sm">
          {/* 링크가 하나라도 있을 경우, map 메서드를 통해 링크 배열을 순회하며 리스트 요소로 각각의 링크를 렌더링 한다. */}
          {profile.links.length > 0 ? (
            profile.links.map((link, index) => (
              <li key={index} className="mt-4 flex items-center gap-2">
                <span>
                  <HiOutlineLink className="text-gray-600 text-lg" />
                </span>
                <a href={link.url} className="hover:underline hover:text-rose-500">
                  {link.url}
                </a>
              </li>
            ))
          ) : (
            // 빈 링크 처리: profile.links 가 비어 있다면(즉, profile.links === 0 이라면)
            <li>No links available</li>
          )}
        </ul>
      )}
    </>
  )
}

export default GoToLink
