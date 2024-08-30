const BlogTitle = ({ className, title = 'HYEHYE' }) => {
  return (
    <>
      {/* 블로그 제목 */}
      <a href="/" className={className}>
        {title}
      </a>
    </>
  )
}

export default BlogTitle
