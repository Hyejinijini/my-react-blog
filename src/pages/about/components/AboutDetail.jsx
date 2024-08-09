import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequest } from '@/api/apiClient.js'

import { GrDocument } from 'react-icons/gr'
import { FaFolder } from 'react-icons/fa'

import { ABOUT_LIST_URL, ABOUT_DETAIL_URL } from '@api/keys/about/url.js'
import { PROFILE_URL } from '@api/keys/home/url.js'

import SideBar from '@pages/about/components/SideBar.jsx'
import ReadMe from '@pages/about/components/ReadMe.jsx'

const AboutDetail = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState('')
  const [nickName, setNickName] = useState('')
  const [img, setImg] = useState('')
  const [detail, setDetail] = useState([])
  const { id } = useParams()

  useEffect(() => {
    getRequest(ABOUT_LIST_URL)
      .then((data) => {
        setList(data)
      })
      .catch((error) => {
        console.error('Error fetching list data:', error)
      })

    getRequest(PROFILE_URL)
      .then((data) => {
        setImg(data.profileImage)
        setNickName(data.nickName)
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error)
      })

    getRequest(ABOUT_DETAIL_URL)
      .then((data) => {
        setDetail(data)
      })
      .catch((error) => {
        console.error('Error fetching detail data:', error)
      })
  }, [])

  useEffect(() => {
    const foundItem = list.find((item) => item.id === parseInt(id))
    if (foundItem) {
      setTitle(foundItem.title)
      setLabel(foundItem.label)
    }
  }, [list, id])

  const handleClick = (id) => {
    navigate(`/about/${id}`)
  }

  const handleFolderClick = (folderId) => {
    navigate(`/about/${id}/detail/${folderId}`)
  }

  const filteredDetail = detail.filter((item) => item.id === parseInt(id))

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <div>
        <div className="flex gap-2 items-end p-4 pb-5">
          {img && <img src={img} alt="Profile" className="w-6 h-6 rounded-full border border-rose-200" />}
          <p className="text-xl hover:underline hover:cursor-pointer" onClick={() => handleClick(id)}>
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
                      onClick={() => handleFolderClick(item.id)} // item.id를 사용하여 이동
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
  )
}

export default AboutDetail
