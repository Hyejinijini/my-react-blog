import WriteBtn from '@pages/blog/components/WriteBtn.jsx'

const BlogSearch = ({ searchTerm, setSearchTerm, onAddCategoryClick }) => {
  const searchHandler = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Find a list..."
        value={searchTerm}
        onChange={searchHandler}
        className="border border-rose-200 rounded-md p-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
      />
      <WriteBtn onClick={onAddCategoryClick} />
      <hr className="border-b border-rose-200 mt-5" />
    </div>
  )
}

export default BlogSearch
