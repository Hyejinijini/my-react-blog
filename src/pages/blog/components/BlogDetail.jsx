import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequest } from '@/api/apiClient.js'

import { GrDocument } from 'react-icons/gr'
import { FaFolder } from 'react-icons/fa'

import { ABOUT_LIST_URL, ABOUT_DETAIL_URL } from '@api/keys/about/url.js'
import { PROFILE_URL } from '@api/keys/home/url.js'

import SideBar from '@pages/about/components/SideBar.jsx'
import ReadMe from '@pages/about/components/ReadMe.jsx'
import Header from '@common/components/header/Header.jsx'

const BlogDetail = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState('')
  const [nickName, setNickName] = useState('')
  const [img, setImg] = useState('')
  const [detail, setDetail] = useState([])
  const { title: paramTitle } = useParams()

  console.log('URL 파라미터:', paramTitle)

  useEffect(() => {
    getRequest(ABOUT_LIST_URL)
      .then((data) => {
        console.log('Fetched List Data:', data)
        setList(data)
      })
      .catch((error) => {
        console.error('Error fetching list data:', error)
      })

    getRequest(PROFILE_URL)
      .then((data) => {
        console.log('Fetched Profile Data:', data)
        setImg(data.profileImage)
        setNickName(data.nickName)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error)
      })

    getRequest(ABOUT_DETAIL_URL)
      .then((data) => {
        console.log('Fetched Detail Data:', data)
        setDetail(data)
      })
      .catch((error) => {
        console.error('Error fetching detail data:', error)
      })
  }, [])

  // title을 id로 매핑하기 위해 list에서 해당 title의 id를 찾음
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    const decodedParamTitle = decodeURIComponent(paramTitle)
    const foundItem = list.find((item) => item.title === decodedParamTitle)
    console.log('Found Item:', foundItem)

    if (foundItem) {
      setTitle(foundItem.title)
      setLabel(foundItem.label)
      setCurrentId(foundItem.id) // id를 currentId로 저장
    }
  }, [list, paramTitle])

  // detail을 id로 필터링
  const filteredDetail = detail.filter((item) => item.id === currentId)
  console.log('Filtered Detail:', filteredDetail)

  const handleClick = (title) => {
    navigate(`/about/${encodeURIComponent(title)}`)
  }

  const handleFolderClick = (folderId) => {
    navigate(`/about/${encodeURIComponent(title)}/detail/${folderId}`)
  }

  return (
    <>
      <Header />
      <div className="max-w-screen-xl w-full mx-auto">
        <div>
          <div className="flex gap-2 items-end p-4 pb-5">
            {img && <img src={img} alt="Profile" className="w-6 h-6 rounded-full border border-rose-200" />}
            <p className="text-xl hover:underline hover:cursor-pointer" onClick={() => handleClick(title)}>
              {title}
            </p>
            {label && <p className="border border-rose-200 rounded-2xl px-2 pb-0.5 text-sm">{label}</p>}
          </div>
          <hr className="border-b-1 border-rose-200" />
        </div>

        <div className="flex">
          <div className="m-auto mx-6 w-full my-6">
            <div className="border rounded-md border-rose-200 bg-rose-50 overflow-hidden">
              <div className="flex items-center m-2 pl-1">
                {img && <img src={img} alt="Profile" className="w-5 h-5 rounded-full border border-rose-200" />}
                {nickName && <p className="p-2 text-sm font-bold">{nickName}</p>}
              </div>

              <div className="bg-white border-t border-rose-200">
                {filteredDetail.map((item) => (
                  <div key={item.id}>
                    <div>
                      <p
                        className="p-2.5 pl-4 text-sm border-b border-rose-200 flex items-center hover:bg-rose-50"
                        onClick={() => handleFolderClick(item.id)}
                      >
                        <FaFolder className="text-blue-400 text-base mr-2" />
                        <span className="inline text-base hover:text-rose-500 hover:underline hover:cursor-pointer flex-grow">
                          {item.folder}
                        </span>

                        <div className="flex-grow items-center justify-start">
                          <span className="text-base text-gray-500 mx-2">{item.content}</span>
                        </div>
                        <span className="text-base text-gray-500 ml-4">{item.update}</span>
                      </p>
                    </div>
                    <p className="p-2.5 pl-4 text-sm flex items-center hover:bg-rose-50">
                      <GrDocument className="text-gray-600 text-base mr-2" />
                      <span className="text-base hover:text-rose-500 hover:underline hover:cursor-pointer flex-grow">
                        README.md
                      </span>
                      <div className="flex-grow flex items-center justify-start">
                        <span className="text-base text-gray-500 mx-2">Update README.md</span>
                      </div>
                      <span className="text-base text-gray-500 ml-4">2 days ago</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <ReadMe />
          </div>

          <SideBar about={'개인적인 것들을 기록하는 공간입니다.'} />
        </div>
      </div>
    </>
  )
}

export default BlogDetail
