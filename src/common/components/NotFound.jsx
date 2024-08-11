import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1>404 Not Found</h1>
        <Link to="/" className="text-red-500">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}

export default NotFound
