import React, { useState, useEffect } from 'react'

// icons
import { IoIosAdd } from 'react-icons/io'

// hooks
import { useBucketListSwrHook } from '@pages/bucketList/hooks/useDataFetchHook.js'
// import useBucketList from '@pages/bucketList/hooks/useBucketList.js'

// commons
import MetaTags from '@common/components/etc/MetaTags.jsx'
import Button from '@common/components/Button.jsx'
import Loading from '@common/components/etc/Loading.jsx'

// components
import AddBucketListModal from '@pages/bucketList/components/AddBucketListModal.jsx'

const BucketList = () => {
  const { bucketList, isError } = useBucketListSwrHook([])
  const [localBucketList, setLocalBucketList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const [newBucketList, setNewBucketList] = useState({
    description: '',
    priority: 0,
    category: '',
    dueDate: ''
  })

  useEffect(() => {
    // 로컬스토리지에서 데이터를 불러오고, SWR 훅에서 가져온 데이터를 로컬스토리지에 저장
    const storedBucketList = localStorage.getItem('bucketList')
    if (storedBucketList) {
      setLocalBucketList(JSON.parse(storedBucketList))
    } else if (bucketList && bucketList.length > 0) {
      localStorage.setItem('bucketList', JSON.stringify(bucketList))
      setLocalBucketList(bucketList)
      setIsLoading(false)
    }
  }, [bucketList])

  if (isLoading) return <Loading />

  // 임시
  if (isError) return <p>Error loading bucket list.</p>

  const addBucketList = () => {
    setOpenModal(true)
  }

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <div>
      <MetaTags subTitle={'| BucketList'} description={'버킷리스트 페이지입니다.'} keywords={'BucketList'} />

      <div className="max-w-screen-xl w-full mx-auto p-6">
        <div className="flex items-center justify-center border-b border-gray-300 mb-3">
          <h1 className="font-bold text-2xl w-full my-4">BUCKET LIST</h1>
          <div>
            <Button
              onClick={addBucketList}
              className="flex items-center w-28 h-10 border-white bg-white hover:font-bold duration-100 hover:bg-transparent hover:border-gray-400"
            >
              <IoIosAdd className="mx-2 text-black" /> <p className="text-black">추가하기</p>
            </Button>
          </div>
        </div>

        <div className="flex">
          <ul className="w-full">
            {bucketList && bucketList.length > 0 ? (
              bucketList.map((bucketListItem) => (
                <li
                  key={bucketListItem.id}
                  className={`${
                    bucketListItem.category === '여행'
                      ? 'bg-orange-100'
                      : bucketListItem.category === '공부'
                        ? 'bg-violet-100'
                        : bucketListItem.category === '일상'
                          ? 'bg-rose-100'
                          : bucketListItem.category === '운동'
                            ? 'bg-blue-100'
                            : 'bg-gray-100'
                  } p-1 m-3 rounded-md`}
                >
                  <button
                    className={`bg-white border rounded-sm w-4 h-4 m-3 ${bucketListItem.category === '여행' ? 'border-orange-300' : bucketListItem.category === '공부' ? 'border-violet-300' : bucketListItem.category === '일상' ? 'border-rose-300' : bucketListItem.category === '운동' ? 'border-blue-300' : 'border-gray-200'}`}
                  />
                  {bucketListItem.description}
                </li>
              ))
            ) : (
              <p>error</p>
            )}
          </ul>
        </div>
      </div>

      <AddBucketListModal openModal={openModal} closeModal={closeModal} />
    </div>
  )
}

export default BucketList
