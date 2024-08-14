import { FiActivity } from 'react-icons/fi'
import { FaRegStar } from 'react-icons/fa'
import { GoEye } from 'react-icons/go'
import { FaCodeFork } from 'react-icons/fa6'
import { IoBookOutline } from 'react-icons/io5'

const SideBarList = () => {
  return (
    <ul className="pb-2 text-sm text-gray-600 border-b border-rose-200">
      <li className="pb-2 flex items-center gap-2  hover:cursor-pointer hover:text-rose-500 duration-100">
        <IoBookOutline className="text-base text-gray-800" />
        Readme
      </li>
      <li className="pb-2 flex items-center gap-2  hover:cursor-pointer hover:text-rose-500 duration-100">
        <FiActivity className="text-base text-gray-500" />
        Activity
      </li>
      <li className="pb-2 flex items-center gap-2  hover:cursor-pointer hover:text-rose-500 duration-100">
        <FaRegStar className="text-base text-gray-600" />0 stars
      </li>
      <li className="pb-2 flex items-center gap-2  hover:cursor-pointer hover:text-rose-500 duration-100">
        <GoEye className="text-base text-gray-700" />1 watching
      </li>
      <li className="pb-2 flex items-center gap-2  hover:cursor-pointer hover:text-rose-500 duration-100">
        <FaCodeFork className="text-base text-gray-500" />0 forks
      </li>
    </ul>
  )
}

export default SideBarList
