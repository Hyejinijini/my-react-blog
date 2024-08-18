import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '@common/components/header/Header.jsx'

const BlogPostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  useEffect(() => {
    // 로컬 스토리지에서 특정 포스트 불러오기
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || []
    const foundPost = storedPosts.find((p) => p.id === Number(id))

    if (foundPost) {
      setPost(foundPost)
    } else {
      // 만약 id에 해당하는 포스트가 없으면 블로그 목록으로 이동
      navigate('/blog')
    }
  }, [id, navigate])

  if (!post) {
    return (
      <div>
        <Header />
        <div className="max-w-screen-xl w-full mx-auto p-6">
          <h2 className="text-2xl font-bold">Loading...</h2>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="max-w-screen-xl w-full mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{post.update}</p>
        {post.image && <img src={post.image} alt={post.title} className="mb-4 w-full h-auto object-cover rounded-md" />}
        <div className="text-lg text-gray-700">
          {post.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default BlogPostDetail
