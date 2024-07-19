import React from 'react'
import { useParams } from 'react-router-dom'
import { initialReviews } from '@pages/movies/Movies.jsx'
import { initialTravels } from '@pages/travel/Travel.jsx'
import { initialFoods } from '@pages/food/Food.jsx'

// 각 데이터 출처별로 데이터를 정의한다.
// 데이터 출처를 기준으로 각 배열을 저장한다.
const dataSources = {
  movie: initialReviews,
  travel: initialTravels,
  food: initialFoods
}

const HomeDetail = () => {
  // URL 파라미터에서 항목의 타입과 ID를 가져온다.
  // useParams 훅을 사용해서 URL 에서 파라미터를 추출한다.
  const { type, id } = useParams()

  // 데이터 출처를 가져온다.
  // URL 파라미터에서 추출한 type 을 기준으로 해당 데이터 배열을 선택한다.
  const data = dataSources[type]

  // 항목 ID에 해당하는 데이터를 찾는다.
  // 데이터 배열(data)에서 item.id 가 URL 파라미터로 전달된 id 와 일치하는 항목을 찾는다.
  const item = data?.find((item) => item.id === parseInt(id))

  // 항목이 없는 경우를 처리한다.
  // 만약 item 이 없으면 "항목을 찾을 수 없습니다." 라는 메시지를 화면에 표시한다.
  if (!item) {
    return <div>항목을 찾을 수 없습니다.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 상단 섹션 */}
      <header className="mb-8">
        {/* 큰 썸네일 이미지 */}
        <img src={item.thumbnail} alt={item.title} className="w-full h-64 object-cover mb-4 " />

        {/* 제목과 서브타이틀 */}
        <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
        <p className="text-gray-600 text-lg mb-4">작성일: {new Date().toLocaleDateString()}</p>
      </header>

      {/* 본문 내용 */}
      <article className="prose lg:prose-xl">
        <p>{item.content}</p>
      </article>
    </div>
  )
}

export default HomeDetail
