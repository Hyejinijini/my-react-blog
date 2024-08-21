import { HelmetProvider, Helmet } from 'react-helmet-async'

// HTML 문서의 메타 태그를 설정하여 SEO 와 페이지 정보를 제공하는 컴포넌트
const MetaTags = ({ title = 'HYEHYE', subTitle, description, keywords }) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* 페이지 제목 */}
        <title>
          {title}
          {subTitle}
        </title>

        {/* 페이지의 설명 메타 태그 */}
        <meta name="description" content={description} />

        {/* 페이지의 주요 키워드 */}
        <meta name="keywords" content={keywords} />

        {/* 페이지의 작성자 정보 */}
        <meta name="author" content="방혜진" />
      </Helmet>
    </HelmetProvider>
  )
}

export default MetaTags
