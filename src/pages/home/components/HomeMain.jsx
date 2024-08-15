import SelfIntro from '@pages/home/components/SelfIntro.jsx'

const HomeMain = () => {
  return (
    <main className="flex-1 sm:mx-0 sm:mt-6 sm:p-4 md:p-1 md:mr-4 md:ml-0 mx-0 p-4 mt-6 lg:p-2">
      <SelfIntro />

      <div className="border border-rose-200 rounded-md mt-4">
        <iframe
          src="https://example.com/your-introduction"
          title="소개서"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] border-rose-100 border-2 rounded-md"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  )
}

export default HomeMain
