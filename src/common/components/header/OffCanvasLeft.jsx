import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoLogoGithub } from 'react-icons/io'
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegBookmark } from 'react-icons/fa6'
import { VscGithubProject } from 'react-icons/vsc'

const OffCanvas = () => {
  const [isOpen, setIsOpen] = useState(false)

  // 오프캔버스 열고 닫는 함수
  const toggleOffCanvas = () => {
    setIsOpen(!isOpen)
  }

  // 오프캔버스 활성화 시 스크롤 비활성화
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    // Cleanup: 컴포넌트가 언마운트되거나 오프캔버스가 닫힐 때 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div>
      {/* 메뉴 버튼 */}
      <button type="button" onClick={toggleOffCanvas} className="border border-rose-200 rounded-md p-1.5">
        <AiOutlineMenu />
      </button>

      {/* 오프캔버스 영역 */}
      <div
        className={`fixed inset-y-0 left-0 transform w-80 bg-white text-gray-600 transition-transform duration-200 ease-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } rounded-tr-lg rounded-br-lg shadow-lg`}
      >
        <div className="flex p-2 pb-0">
          <div className="pl-2 pt-2 pb-1.5" style={{ width: '248px' }}>
            <div className="flex justify-between items-center">
              {/* 아이콘 추가할 예정 */}
              <IoLogoGithub className="w-8 h-8" />
            </div>
          </div>

          <div className="p-2 w-12 h-12">
            {/* X 버튼 */}
            <button
              onClick={toggleOffCanvas}
              className="flex items-center justify-center text-rose-400 hover:bg-rose-100 hover:text-rose-600 hover:rounded-md duration-300 w-8 h-8"
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>

        {/* 오프캔버스 리스트 영역 */}
        <div className="px-2 pb-4">
          <div className="p-2">
            <ul className="text-sm">
              <li className="flex items-center text-base hover:bg-rose-50 hover:rounded-md px-2">
                <AiOutlineHome />
                <a href="/" className="block px-2 py-1.5">
                  Home
                </a>
              </li>
              <li className="flex items-center text-base hover:bg-rose-50 hover:rounded-md px-2.5">
                <FaRegBookmark className="text-sm" />
                <a href="/about" className="block px-2 py-1.5">
                  About
                </a>
              </li>
              <li className="flex items-center text-base hover:bg-rose-50 hover:rounded-md px-2.5">
                <VscGithubProject className="text-gray-600" />
                <a href="/projects" className="block px-2 py-1.5 hover:bg-rose-50 hover:rounded-md">
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 오버레이 클릭 시 닫기 */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-10 z-30" onClick={toggleOffCanvas}></div>}
    </div>
  )
}

export default OffCanvas
