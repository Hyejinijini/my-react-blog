import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getRequest } from '@/api/apiClient.js'
import { ABOUT_LIST_URL } from '@api/keys/about/url.js'

const AboutList = () => {
  const [list, setList] = useState([])
  const [searchTerm, setSearchTerm] = useState('') // 검색어 상태 추가

  useEffect(() => {
    getRequest(ABOUT_LIST_URL)
      .then((data) => {
        setList(data)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error) // 오류 확인
      })
  }, [])

  // 검색어에 따라 필터링된 목록 생성
  const filteredList = list.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.skill.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2">
      {/* 검색창 추가 */}
      <div>
        <input
          type="text"
          placeholder="Find a list..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-rose-200 rounded-md p-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
        />
        <hr className="borde-b border-rose-200 mt-5" />
      </div>

      {filteredList.length > 0 ? (
        filteredList.map((item, id) => (
          <div key={id} className="border-b border-rose-200 py-4">
            <ul>
              <li>
                <div className="flex gap-3 py-2 items-center mt-2">
                  <Link to={`/about/${item.id}`} className="font-bold text-xl text-rose-500 hover:underline">
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
    </main>
  )
}

export default AboutList
