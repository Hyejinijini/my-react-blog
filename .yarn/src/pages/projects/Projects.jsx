import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import MetaTags from '@common/components/MetaTags.jsx'

// 프로젝트 데이터 예제
const projects = [
  {
    id: 1,
    name: '프로젝트 1',
    description: '첫 번째 프로젝트',
    githubUrl: '',
    thumbnail: 'https://via.placeholder.com/150' // 썸네일 URL 예시
  },
  {
    id: 2,
    name: '프로젝트 2',
    description: '두 번째 프로젝트',
    githubUrl: '',
    thumbnail: 'https://via.placeholder.com/150' // 썸네일 URL 예시
  },
  {
    id: 3,
    name: '프로젝트 3',
    description: '세 번째 프로젝트',
    githubUrl: '',
    thumbnail: 'https://via.placeholder.com/150' // 썸네일 URL 예시
  }
]

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <MetaTags subTitle={' | 프로젝트'} description={'프로젝트 페이지입니다.'} keywords={'프로젝트'} />

      {/* 헤더 부분: 홈 아이콘과 제목 */}
      <div className="flex r mb-8 p-4">
        {/* 홈 아이콘 링크 */}
        <Link to="/" className="text-gray-700 hover:text-rose-500 hover:scale-125 transform duration-300 mr-6">
          <FaHome className="w-8 h-8" />
        </Link>

        {/* 페이지 제목 */}
        <h1 className="text-4xl font-extrabold text-gray-800 ">My Projects</h1>
      </div>

      {/* 프로젝트 목록 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          >
            {/* 썸네일 이미지 */}
            <img src={project.thumbnail} alt={project.name} className="w-full h-64 object-cover" />

            <div className="p-6">
              {/* 제목 */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h2>

              {/* 내용 */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* GitHub 링크 */}
              <p className="text-blue-600 hover:text-blue-800 transition duration-200 text-lg font-medium">
                View on GitHub
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
