import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogCreate = () => {
  const navigate = useNavigate()
  const { category } = useParams() // URL에서 카테고리 정보를 받아옵니다.

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title,
      content,
      image,
      update: new Date().toLocaleDateString(),
      category // 카테고리 정보를 함께 저장
    }

    // 해당 카테고리의 기존 포스트들을 불러오기
    const existingPosts = JSON.parse(localStorage.getItem(category)) || []
    existingPosts.push(newPost)

    // 로컬 스토리지에 해당 카테고리로 저장
    localStorage.setItem(category, JSON.stringify(existingPosts))

    // 저장 후 블로그 리스트 페이지로 이동
    navigate(`/blog/${title}`)
  }

  const prevButton = () => {
    navigate(`/blog/${title}`)
  }

  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto py-4">
        <div className="flex justify-between px-4">
          <button onClick={prevButton} className="hover:scale-110 duration-200">
            이전으로
          </button>
          <h2 className="text-2xl font-bold">새로운 글 작성</h2>
          <button
            onClick={handleSubmit}
            type="submit"
            className="border border-rose-300  text-black px-4 rounded-full hover:bg-rose-50 hover:scale-110 transition duration-200"
          >
            작성 완료
          </button>
        </div>
        <hr className=" mt-4 border-t border-rose-400" />
        <form onSubmit={handleSubmit} className="space-y-4 px-4">
          <div>
            <input
              type="text"
              className="mt-1 block w-full border-b border-gray-300 py-6 focus:outline-none"
              value={title}
              placeholder="제목"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <textarea
              className="mt-1 block w-full border-b border-gray-300 focus:outline-none"
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">이미지</label>
            <input type="file" className="mt-1 block w-full" onChange={handleImageUpload} />
            {image && <img src={image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />}
          </div>

          <div></div>
        </form>
      </div>
    </>
  )
}

export default BlogCreate
