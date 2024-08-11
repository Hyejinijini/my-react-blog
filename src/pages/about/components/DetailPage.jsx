import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '@/api/apiClient.js'
import AboutHeader from '@pages/about/components/AboutHeader.jsx'
import { DETAIL_PAGE_URL } from '@api/keys/about/url.js'

import { FaFolder } from 'react-icons/fa'
import { IoDocumentOutline } from 'react-icons/io5'
import { BiPencil } from 'react-icons/bi'

const DetailPage = () => {
  const [list, setList] = useState([]) // 전체 데이터 목록
  const [searchTerm, setSearchTerm] = useState('') // 검색어
  const [filteredFiles, setFilteredFiles] = useState([]) // 검색 결과
  const [selectedFile, setSelectedFile] = useState(null) // 선택된 파일
  const [isEditing, setIsEditing] = useState(false) // 수정 상태
  const [editContent, setEditContent] = useState('') // 수정할 코드
  const { id } = useParams() // URL에서 id 가져오기

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRequest(DETAIL_PAGE_URL)
        setList(data)
      } catch (error) {
        console.error('Error fetching detail data:', error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    // ID에 해당하는 파일들만 필터링
    const currentFiles = list.filter((item) => item.id === parseInt(id))
    setFilteredFiles(currentFiles)
  }, [id, list])

  useEffect(() => {
    // 현재 ID에 맞는 파일만 선택
    const file = filteredFiles.find((item) => item.id === parseInt(id))
    setSelectedFile(file)
  }, [filteredFiles, id])

  const handleFileClick = (fileId) => {
    // 파일 클릭 시 해당 id의 데이터 표시
    const file = filteredFiles.find((item) => item.id === fileId)
    if (file) {
      setSelectedFile(file)
    }
  }

  const handleEditClick = () => {
    setEditContent(selectedFile?.code || '')
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    // 수정된 내용 저장 (여기서는 상태에만 반영)
    if (selectedFile) {
      const updatedFile = { ...selectedFile, code: editContent }
      setSelectedFile(updatedFile)
    }
    setIsEditing(false)
  }

  const handleCancelClick = () => {
    setEditContent(selectedFile?.code || '')
    setIsEditing(false)
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <AboutHeader />
      <div className="flex flex-1">
        {/* aside 부분 */}
        <aside className="w-64 border-r border-rose-200 flex-shrink-0 h-full bg-white">
          <div className="flex flex-col h-full">
            <div className="py-4 px-3 flex-shrink-0">
              <input
                type="text"
                placeholder="파일 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex-grow overflow-y-auto">
              <ul className="list-none">
                {filteredFiles
                  .filter(
                    (file) =>
                      (Array.isArray(file.folder)
                        ? file.folder.join(' ').toLowerCase()
                        : file.folder.toLowerCase()
                      ).includes(searchTerm.toLowerCase()) ||
                      file.code?.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                  .map((file) => (
                    <li
                      key={file.id}
                      className="p-4 border-b border-rose-200 cursor-pointer flex gap-2"
                      onClick={() => handleFileClick(file.id)}
                    >
                      <div className="flex items-start">
                        <FaFolder className="text-blue-400" />
                      </div>
                      <div className="flex flex-col -mt-1.5">
                        {Array.isArray(file.folder) ? (
                          <ul className="list-disc pl-4 flex items-center gap-2">
                            {file.folder.map((folderItem, index) => (
                              <li key={index}>{folderItem}</li>
                            ))}
                          </ul>
                        ) : (
                          file.folder
                        )}

                        <ul className="pl-4 flex gap-2 items-center">
                          <IoDocumentOutline />
                          <li>{file.code ? 'index.html' : 'No Code'}</li>
                        </ul>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* 내용 부분 */}
        <main className="flex-grow m-4">
          <div className="border border-rose-200 rounded-md w-full h-auto m-2">
            {selectedFile ? (
              <>
                <div className="border-b border-rose-200 py-3 bg-rose-50 justify-between flex items-center">
                  <h2 className="inline text-md ml-3 border border-rose-300 w-auto rounded-md bg-white p-1 px-2">
                    index.html
                  </h2>
                  <button
                    onClick={handleEditClick}
                    className="p-1.5 mr-3 hover:bg-rose-100 rounded-md duration-150 hover:cursor-pointer border border-rose-200"
                  >
                    <BiPencil className="text-lg text-gray-500" />
                  </button>
                </div>
                {isEditing ? (
                  <>
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full h-64 border border-gray-300 rounded-md"
                    />
                    <div className="flex justify-end mt-4 mb-2">
                      <button
                        onClick={handleSaveClick}
                        className="px-4 bg-rose-400 text-white rounded-md mr-2 hover:bg-rose-500 duration-150"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancelClick}
                        className="px-4 py-1 border border-gray-300 bg-gray-100 rounded-md hover:bg-gray-200 duration-150 mr-2"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <pre className="whitespace-pre-wrap pb-6 ml-4">{selectedFile.code || selectedFile.content}</pre>
                  </>
                )}
              </>
            ) : (
              <p>파일을 선택해주세요.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default DetailPage
