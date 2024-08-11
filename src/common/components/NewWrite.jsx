import React, { useState } from 'react'
import MetaTags from '@common/components/MetaTags.jsx'
import OffCanvasLeft from '@common/components/header/OffCanvasLeft.jsx'
import DropdownButton from '@common/components/header/DropdownButton.jsx'
import CalendarModal from '@common/components/header/CalendarModal.jsx'
import axios from 'axios'

const ABOUT_LIST_URL = 'http://localhost:5173/aboutList'

const NewWrite = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post(ABOUT_LIST_URL, {
        title,
        content,
        label: 'public',
        skill: 'Html'
      })

      console.log('New about created:', response.data)
      // 폼 초기화
      setTitle('')
      setContent('')
    } catch (error) {
      console.error('Error creating new about:', error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <MetaTags subTitle={' | Write'} description={'새로운 목록 작성 페이지입니다.'} keywords={'write'} />

      <div className="border border-b-rose-200 p-2 bg-rose-50 flex pb-2 gap-3 items-center">
        <div className="flex items-center gap-3 font-bold w-full">
          <OffCanvasLeft />
          <img src="/HYEHYE.svg" alt="로고 이미지" className="w-12 h-12" />
          <p>New About</p>
        </div>

        <div className="flex gap-2">
          <DropdownButton />
          <CalendarModal />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnofQS0P6zgg_gbUeMaCPPKS7vD1PVGhr0Q&s"
            alt="프로필 이미지"
            className="max-w-none box-border border border-rose-100 w-8 h-8 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>

      <div className="max-w-screen-xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="my-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-start mb-6">
            <h3 className="text-2xl font-bold border-b border-rose-200 p-2">Create a new about</h3>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                About name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                placeholder="Enter the About name"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
                placeholder="Enter the content"
                required
              />
            </div>
            <div className="text-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-rose-500"
                disabled={loading}
              >
                {loading ? 'Creating...' : 'Create about'}
              </button>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewWrite
