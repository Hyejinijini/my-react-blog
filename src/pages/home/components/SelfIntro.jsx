import { useState } from 'react'

// icons
import IntroEditBtn from '@pages/home/components/IntroEditBtn.jsx'
import IntroEditForm from '@pages/home/components/IntroEditForm.jsx'

const SelfIntro = () => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      <div className="border border-rose-200 rounded-md p-4">
        <div className="text-xs p-2 flex items-center justify-between">
          <div>HYEHYE / 소개</div>

          {/* 소개글 수정 관련 버튼 부분 */}
          <IntroEditBtn isEditing={isEditing} setIsEditing={setIsEditing} />
        </div>

        {/* 소개글 수정 폼 */}
        <IntroEditForm isEditing={isEditing} />
      </div>
    </>
  )
}
export default SelfIntro
