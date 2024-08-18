import MetaTags from '@common/components/etc/MetaTags'
import BlogMain from '@pages/blog/components/BlogMain.jsx'

const Blog = () => {
  return (
    <div>
      <MetaTags subTitle={' | Blog'} description={'블로그 페이지입니다.'} keywords={'blog'} />

      <div className="max-w-screen-xl w-full mx-auto">
        {/* 메인 콘텐츠 */}
        <BlogMain />
      </div>
    </div>
  )
}

export default Blog
