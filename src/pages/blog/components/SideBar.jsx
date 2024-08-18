import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ABOUT_README_URL } from '@api/keys/about/url.js'
import { getRequest } from '@/api/apiClient.js'
import { GoGear } from 'react-icons/go'
import SideBarList from '@pages/blog/components/SideBarList.jsx'

const SideBar = () => {
  const [about, setAbout] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editedContent, setEditedContent] = useState('')
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getRequest(ABOUT_README_URL)
        .then((data) => {
          // ID를 기반으로 데이터 필터링
          const filteredData = data.find((item) => item.id === parseInt(id))
          setAbout(filteredData)
          setEditedContent(filteredData ? filteredData.content : '') // 초기 content 값으로 설정
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }, [id]) // ID가 변경될 때마다 데이터 요청

  const handleEditClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSaveChanges = () => {
    // 상태를 객체 형태로 유지하면서 content 속성만 업데이트
    setAbout((prevAbout) => ({
      ...prevAbout,
      content: editedContent
    }))
    setIsModalOpen(false)
  }

  return (
    <div className="mt-6 w-2/5 mr-6">
      <p className="flex items-center justify-between text-sm font-bold mb-4">
        About
        <GoGear
          className="text-gray-600 text-lg hover:cursor-pointer hover:text-rose-500 duration-100"
          onClick={handleEditClick}
        />
      </p>
      {about && (
        <>
          <p className="mb-4">{about.content}</p>
        </>
      )}
      <SideBarList />

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20 z-50">
          <div className="bg-white border border-rose-200 w-7/12">
            <h2 className="bg-rose-50 p-4 text-sm font-bold mb-4 border-b border-rose-200">Edit about details</h2>
            <div className="px-4">
              <p className="text-sm font-bold pb-2">Description</p>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows="6"
                className="w-full border border-gray-300 bg-gray-50 p-2 rounded-md focus:outline-none focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
            <div className="flex justify-end gap-2 p-4">
              <button
                onClick={handleCloseModal}
                className="px-4 py-1 bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-700 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveChanges}
                className="px-4 py-1 bg-rose-400 text-white rounded-md hover:bg-rose-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SideBar
