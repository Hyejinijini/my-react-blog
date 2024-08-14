const ProfileImage = ({ profile }) => {
  return (
    <>
      <div className="sm:flex md:flex-col flex flex-row">
        <div>
          {/* 프로필 이미지 부분 */}
          <img
            src={profile.profileImage}
            alt="프로필 이미지"
            className="rounded-full w-24 h-24 ml-0 mr-4 mt-8 border-2 border-rose-200 sm:w-28 sm:h-28 md:w-64 md:h-64 lg:w-72 lg:h-72"
          />
        </div>
      </div>
    </>
  )
}

export default ProfileImage
