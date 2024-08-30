import MyInfo from '@pages/home/components/MyInfo.jsx'

const HomeMain = () => {
  return (
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2 md:mb-96 sm:mb-96 mb-40">
      {/* 소개 부분 */}
      <MyInfo />
    </main>
  )
}

export default HomeMain
