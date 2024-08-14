const BlogSearch = ({ searchTerm, setSearchTerm }) => {
  const searchHanlder = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Find a list..."
        value={searchTerm}
        onChange={searchHanlder}
        className="border border-rose-200 rounded-md p-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
      />
      <hr className="borde-b border-rose-200 mt-5" />
    </div>
  )
}

export default BlogSearch
