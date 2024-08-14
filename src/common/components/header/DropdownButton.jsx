/**
 * 나중에 사용하게 될 수도 있으니 파일 삭제는 하지 않고 주석 처리만 해둠
 */

// import React, { useState, useEffect, useRef } from 'react'
// import { IoMdAdd, IoMdArrowDropdown } from 'react-icons/io'
// import { useNavigate } from 'react-router-dom'

// const DropdownButton = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const dropdownRef = useRef(null)
//   const buttonRef = useRef(null)
//   const navigate = useNavigate()

//   // 버튼 클릭 시 드롭다운의 상태를 토글
//   const toggleDropdown = () => {
//     setIsOpen((prevState) => !prevState)
//   }

//   // 클릭 외부 영역 클릭 시 드롭다운 닫기
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsOpen(false)
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside)

//     // Cleanup 이벤트 리스너
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside)
//     }
//   }, [])

//   const handleNewWriteClick = () => {
//     navigate('/write') // 새로운 글 작성 페이지로 이동
//   }

//   return (
//     <div className="relative">
//       <button
//         type="button"
//         onClick={toggleDropdown}
//         ref={buttonRef}
//         className="border border-rose-200 rounded-md px-2 w-14 hover:bg-rose-100 duration-150 h-8 flex items-center relative group"
//       >
//         <span className="flex items-center">
//           <span className="mr-2">
//             <IoMdAdd className="text-gray-600" />
//           </span>
//           <span>
//             <IoMdArrowDropdown className="text-gray-500" />
//           </span>
//         </span>

//         {/* 툴팁 */}
//         <div
//           className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1.5 mb-2 w-max p-1.5 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150"
//           style={{ zIndex: 50 }}
//         >
//           Create new...
//         </div>
//       </button>

//       {/* 드롭다운 메뉴 */}
//       <div
//         ref={dropdownRef}
//         className={`absolute top-full right-0 min-w-[12rem] max-w-screen-sm py-2 bg-white text-gray-600 text-sm rounded-lg shadow-lg border border-rose-200 overflow-x-hidden transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-1 opacity-100' : 'transform translate-y-0 opacity-0'}`}
//         style={{ zIndex: 40 }}
//       >
//         <ul className="flex flex-col w-full">
//           <li className="px-2 border-b border-rose-200 pb-2">
//             <button
//               onClick={handleNewWriteClick}
//               className="block w-full text-gray-600 hover:text-gray-900 py-1.5 px-2 hover:bg-rose-50 rounded-md text-left"
//             >
//               New write
//             </button>
//           </li>
//           <li className="px-2 pt-2">
//             <a
//               href="#"
//               className="block w-full text-gray-600 hover:text-gray-900 hover:bg-rose-50 py-1.5 px-2 rounded-md"
//             >
//               New project
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default DropdownButton
