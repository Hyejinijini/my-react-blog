import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { initialReviews } from '@pages/movies/Movies.jsx'
import { initialTravels } from '@pages/travel/Travel.jsx'
import { initialFoods } from '@pages/food/Food.jsx'

import Welcome from './components/Welcome.jsx'
import Pagination from '@common/components/Pagination.jsx'

// Movie, Travel, Food 에서 가져온 데이터를 하나로 합친다.
// 각 항목에 type 을 추가해서, 어떤 카테고리의 데이터인지 구분할 수 있게 한다.
const allData = [
  ...initialReviews.map((item) => ({ ...item, type: 'movie' })),
  ...initialTravels.map((item) => ({ ...item, type: 'travel' })),
  ...initialFoods.map((item) => ({ ...item, type: 'food' }))
]

// 힌 페이지에 표시할 항목 수를 정의한다.
const itemsPerPage = 6

const Home = () => {
  // 현재 페이지 상태를 관리하기 위한 useState 훅을 사용했다.
  // 초기값은 1로 설정했다.
  const [currentPage, setCurrentPage] = useState(1)

  // 총 페이지 수를 계산한다.
  // allData 의 길이를 itemsPerPage 로 나누어 올림하여 계산한다.
  // 예를 들어, allData 에 20 개의 항목이 있고, 한 페이지에 6개를 표시하면 총 페이지 수는 4 페이지가 된다.
  const totalPages = Math.ceil(allData.length / itemsPerPage)

  // 페이지가 변경될 때 호출되는 함수이다.
  // 페이지가 유효한 범위(1과 totalPages 사이)에 있는지 확인하고 상태를 업데이트 한다.
  // 페이지가 1보다 작거나 totalPages 보다 크면(즉, 유효하지 않은 페이지면) 상태를 업데이트 하지 않는다.
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  // 현재 페이지에 표시될 시작 인덱스를 계산한다.
  // 예를 들어, 현재 페이지가 2면 시작 인덱스는 (2-1) * 6 = 6이 된다.
  const startIndex = (currentPage - 1) * itemsPerPage

  // startIndex 와 startIndex + itemsPerPage 사이의 데이터만 선택하여 표시한다.
  // slice 메서드를 사용해서 startIndex 부터 startIndex + itemsPerPage 까지의 데이터를 선택한다.
  // 예를 들어, 현재 페이지가 2고, itemsPerPage 가 6이면 인덱스 6부터 11까지의 데이터를 선택한다.
  const selectedData = allData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div>
      {/* Welcome 컴포넌트를 화면 상단에 표시한다. */}
      <div className="w-full">
        <Welcome />
      </div>

      <div className="container mx-auto py-8">
        {/* selectData 배열에 있는 각 항목을 화면에 표시한다. */}
        {selectedData.map((item) => (
          <div>
            <Link
              // 링크를 클릭하면 해당 글의 디테일 페이지로 이동한다.
              // URL 경로는 /detail/:type/:id 형태이다.
              to={`/detail/${item.type}/${item.id}`}
              key={item.id}
              className="flex-block mb-4 p-4 bg-white hover:bg-gray-100 flex items-start space-x-4"
            >
              {/* 썸네일 이미지 */}
              <div className="flex-shrink-0 mr-4">
                <img src={item.thumbnail} alt={item.title} className="w-32 h-32 object-cover" />
              </div>

              {/* 제목과 컨텐츠 */}
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p>{item.content}</p>
              </div>
            </Link>

            {/* 항목 아래에 구분선을 추가한다. */}
            <hr className="mt-4 border-t-2 border-gray-300" />
          </div>
        ))}
      </div>

      {/* Pagination 컴포넌트로 페이지를 이동할 수 있는 버튼을 제공한다. */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  )
}

export default Home
