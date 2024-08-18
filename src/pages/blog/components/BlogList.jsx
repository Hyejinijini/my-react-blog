import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAboutListHook } from '@pages/blog/hooks/useDataFetchHooks.js'
import useFilteredListHook from '@/pages/blog/hooks/useFilteredListHook.js'
import BlogSearch from './BlogSearch.jsx'

const BlogList = () => {
  const list = useAboutListHook()

  // 상태 변수
  const [categories, setCategories] = useState([])
  const [isAddingCategory, setIsAddingCategory] = useState(false)
  // 수정 폼 상태
  const [isEditingCategory, setIsEditingCategory] = useState(null)
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredList = useFilteredListHook(searchTerm, categories)

  // 로컬스토리지에서 데이터 로드
  useEffect(() => {
    const savedCategories = localStorage.getItem('categories')
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories))
    } else {
      const initializeCategories = async () => {
        if (list) {
          setCategories(list)
          localStorage.setItem('categories', JSON.stringify(list))
        }
      }
      initializeCategories()
    }
  }, [list])

  const handleCategoryChange = (e) => {
    const { name, value } = e.target
    if (name === 'title') setNewTitle(value)
    if (name === 'content') setNewContent(value)
  }

  const handleCategorySubmit = (e) => {
    e.preventDefault()
    if (newTitle.trim() && newContent.trim()) {
      const newCategoryData = {
        id: categories.length ? categories[categories.length - 1].id + 1 : 1,
        title: newTitle,
        content: newContent
      }
      const updatedList = [...categories, newCategoryData]
      setCategories(updatedList)
      localStorage.setItem('categories', JSON.stringify(updatedList))
      setNewTitle('')
      setNewContent('')
      setIsAddingCategory(false)
    }
  }

  // 카테고리 수정
  const handleEditClick = (category) => {
    setIsAddingCategory(true)
    setIsEditingCategory(category)
    setNewTitle(category.title)
    setNewContent(category.content)
  }

  const handleCategoryUpdate = (e) => {
    e.preventDefault()
    if (newTitle.trim() && newContent.trim() && isEditingCategory) {
      const updatedList = categories.map((category) =>
        category.id === isEditingCategory.id ? { ...category, title: newTitle, content: newContent } : category
      )
      setCategories(updatedList)
      localStorage.setItem('categories', JSON.stringify(updatedList))
      setNewTitle('')
      setNewContent('')
      setIsAddingCategory(false)
      setIsEditingCategory(null)
    }
  }

  const handleAddCategoryClick = () => {
    setIsAddingCategory(true)
    setIsEditingCategory(null)
    setNewTitle('')
    setNewContent('')
  }

  // 카테고리 삭제
  const handleDeleteClick = (id) => {
    const updatedList = categories.filter((category) => category.id !== id)
    setCategories(updatedList)
    localStorage.setItem('categories', JSON.stringify(updatedList))
  }

  return (
    <>
      <BlogSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} onAddCategoryClick={handleAddCategoryClick} />

      {/* 카테고리 추가 및 수정 폼 */}
      {(isAddingCategory || isEditingCategory) && (
        <form
          onSubmit={isEditingCategory ? handleCategoryUpdate : handleCategorySubmit}
          className="mb-4 flex flex-col gap-2 mt-2"
        >
          <input
            type="text"
            name="title"
            placeholder="title"
            value={newTitle}
            onChange={handleCategoryChange}
            className="border border-rose-200 rounded-md p-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
          />
          <input
            type="text"
            name="content"
            placeholder="content"
            value={newContent}
            onChange={handleCategoryChange}
            className="border border-rose-200 rounded-md p-2 w-full focus:outline-none focus:ring-rose-500 focus:border-rose-500"
          />
          <button type="submit" className="py-1 bg-rose-100 text-gray-600 hover:bg-rose-200 rounded-md">
            {isEditingCategory ? '수정' : '추가'}
          </button>
        </form>
      )}

      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <div key={item.id} className="border-b border-rose-200 py-4">
            <ul>
              <li>
                <div className="flex justify-between py-2 items-center mt-2">
                  <Link
                    to={`/blog/${encodeURIComponent(item.title)}`}
                    className="font-bold text-xl text-rose-500 hover:underline"
                  >
                    {item.title}
                  </Link>
                  <div className="flex gap-2">
                    <button onClick={() => handleEditClick(item)} className="text-sm text-blue-500 hover:underline">
                      수정
                    </button>
                    <button onClick={() => handleDeleteClick(item.id)} className="text-sm text-red-500 hover:underline">
                      삭제
                    </button>
                  </div>
                </div>
                <p className="pb-4">{item.content}</p>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p className="flex items-center justify-center mt-20 font-bold text-xl text-gray-600">
          HYEHYE doesn't have any list that match.
        </p>
      )}
    </>
  )
}

export default BlogList
