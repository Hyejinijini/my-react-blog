import MetaTags from '@common/components/etc/MetaTags'

import useComments from '@pages/guestbook/hooks/useComments' // 커스텀 훅 import

// components
import CommentSection from '@pages/guestbook/components/CommentSection.jsx'
import CommentForm from '@pages/guestbook/components/CommentForm.jsx'

const Guestbook = () => {
  const [comments, setComments] = useComments() // 커스텀 훅 사용

  return (
    <div>
      <MetaTags subTitle={' | Guestbook'} description={'방명록 페이지입니다.'} keywords={'guestbook'} />

      <div className="max-w-screen-xl w-full mx-auto p-6">
        <CommentSection comments={comments} setComments={setComments} />

        <CommentForm setComments={setComments} />
      </div>
    </div>
  )
}

export default Guestbook
