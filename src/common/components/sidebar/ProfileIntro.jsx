const ProfileIntro = ({ editMode, profile }) => {
  return (
    <>
      {/* 수정폼이 false 일 때만 프로필 소개란을 보여준다.  */}
      {!editMode && (
        <div className="flex flex-col sm:py-10 md:py-4 py-8">
          <span className="text-2xl font-bold text-gray-600">{profile.name}</span>
          <span className="text-xl font-thin text-gray-400">{profile.nickName}</span>
          <span className="text-base text-gray-600 py-4 pb-1">{profile.bio}</span>
        </div>
      )}
    </>
  )
}
export default ProfileIntro
