import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getRequest } from '@/api/apiClient.js'
import { ABOUT_README_URL } from '@api/keys/about/url.js'
import { BiPencil, BiSave } from 'react-icons/bi'
import { IoBookOutline } from 'react-icons/io5'
import { AiOutlineClose } from 'react-icons/ai'

const ReadMe = () => {
  const [readMe, setReadMe] = useState(null)
  const [editMode, setEditMode] = useState(false)
  const [editedContent, setEditedContent] = useState('')
  const [editedTitle, setEditedTitle] = useState('')
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getRequest(ABOUT_README_URL)
        .then((data) => {
          const filteredData = data.find((item) => item.id === parseInt(id))
          setReadMe(filteredData)
          if (filteredData) {
            setEditedTitle(filteredData.title)
            setEditedContent(filteredData.content)
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }, [id])

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleSaveClick = () => {
    const updatedReadMe = {
      ...readMe,
      title: editedTitle,
      content: editedContent
    }
    setReadMe(updatedReadMe)
    setEditMode(false)
  }

  const handleCancelClick = () => {
    setEditedTitle(readMe.title)
    setEditedContent(readMe.content)
    setEditMode(false)
  }

  return (
    <div className="border border-rose-200 rounded-md mt-4 pb-12">
      <div className="flex items-center justify-between border-b border-rose-200 text-sm font-bold p-3">
        <div className="flex justify-center items-center gap-0.5 hover:bg-rose-50 rounded-md duration-150 px-1">
          <IoBookOutline className="text-base text-gray-800" />
          <p className="inline p-1.5 hover:cursor-pointer">README</p>
        </div>
        <div className="flex gap-2">
          {editMode ? (
            <>
              <button
                className="p-1.5 hover:bg-rose-50 rounded-md duration-150 hover:cursor-pointer"
                onClick={handleSaveClick}
              >
                <BiSave className="text-lg text-gray-500" />
              </button>
              <button
                className="p-1.5 hover:bg-rose-50 rounded-md duration-150 hover:cursor-pointer"
                onClick={handleCancelClick}
              >
                <AiOutlineClose className="text-lg text-gray-500" />
              </button>
            </>
          ) : (
            <button
              className="p-1.5 hover:bg-rose-50 rounded-md duration-150 hover:cursor-pointer"
              onClick={handleEditClick}
            >
              <BiPencil className="text-lg text-gray-500" />
            </button>
          )}
        </div>
      </div>
      {editMode ? (
        <div className="mx-6 pt-8">
          <input
            className="border-b border-rose-200 text-2xl font-bold w-full mb-3 p-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full border-b border-rose-200 p-2 h-40"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        </div>
      ) : (
        readMe && (
          <>
            <h1 className="border-b border-rose-200 text-2xl font-bold mx-6 pt-8 pb-3">{readMe.title}</h1>
            <p className="mx-6 pt-4">{readMe.content}</p>
          </>
        )
      )}
    </div>
  )
}

export default ReadMe
