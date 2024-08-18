import { FiEdit2 } from 'react-icons/fi'

const WriteBtn = ({ onClick }) => {
  return (
    <div className="flex">
      <button
        onClick={onClick}
        className="px-3 ml-2 border border-rose-200 rounded-md hover:bg-rose-50 hover:text-rose-600 hover:scale-110 duration-200 p-2"
      >
        <FiEdit2 />
      </button>
    </div>
  )
}

export default WriteBtn
