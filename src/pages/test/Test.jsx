import React, { useEffect, useState } from 'react'
import Modal from './components/Modal'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { getRequest } from '../../api/apiClient'

const Test = () => {
  // 모달 상태와 선택된 아이템 상태를 관리
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  // 데이터 카운트와 데이터 상태를 관리
  const [dataCount, setDataCount] = useState(10)
  const [datas, setDatas] = useState([])

  // 에러 메시지 관리
  const [error, setError] = useState(null)

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
  //     setDatas(res.data.slice(0, dataCount))
  //   })
  // }, [dataCount])

  const fetchData = async () => {
    try {
      // API 로부터 데이터를 가져온다.
      const data = await getRequest({ url: 'https://jsonplaceholder.typicode.com/photos' })
      setDatas(data.slice(0, dataCount))
      console.log(data)
    } catch (error) {
      setError('데이터를 불러오는 중 오류가 발생했습니다.')
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [dataCount])

  // 모달을 열고 선택된 아이템을 설정하는 함수
  const openModal = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  // 모달 닫는 함수
  const closeModal = () => {
    setModalOpen(false)
  }

  // 더보기 버튼 클릭 시 데이터 카운트 증가시키는 함수
  const seeMore = () => {
    const newDataCount = dataCount + 10
    setDataCount(newDataCount)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 헤더 부분: 홈 아이콘과 제목 */}
      <div className="flex r mb-8 p-4">
        {/* 홈 아이콘 링크 */}
        <Link to="/" className="text-gray-700 hover:text-rose-500 hover:scale-125 transition duration-300 mr-6">
          <FaHome className="w-8 h-8" />
        </Link>

        {/* 페이지 제목 */}
        <h1 className="text-4xl font-bold text-center">Blog</h1>
      </div>

      {/* 오류 메시지 */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* 목록 */}
      <div className="grid grid-cols-5 gap-4 overflow-y-auto">
        {datas.map((item) => (
          <div key={item.id} className="bg-white shadow-sm p-4 rounded-md">
            <img
              onClick={() => openModal(item)}
              src={item.thumbnailUrl}
              alt={item.title}
              className="w-full h-auto cursor-pointer"
            />
            <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
          </div>
        ))}

        <Modal modalOpen={modalOpen} closeModal={closeModal} item={selectedItem} />
      </div>

      {/* 더보기 버튼 */}
      <div className="mt-4 text-center">
        <button onClick={seeMore} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          더보기
        </button>
      </div>
    </div>
  )
}

export default Test
