import { FiCalendar } from 'react-icons/fi'

const CalendarModal = () => {
  return (
    <div className="relative">
      <a
        href="#"
        className="flex items-center justify-center border border-rose-200 rounded-md w-8 h-8 hover:bg-rose-100 duration-150 relative group"
      >
        <FiCalendar className="w-5 h-5 text-gray-500" />
        {/* 툴팁 */}
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 w-max p-1.5 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150"
          style={{ zIndex: 50 }}
        >
          Calendar
        </div>
      </a>
    </div>
  )
}

export default CalendarModal
