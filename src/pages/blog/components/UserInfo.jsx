import { useAboutDataFetchHook, useAboutSwrHook } from '../hooks/useDataFetchHooks.js'

import Loading from '@common/components/Loading.jsx'

const UserInfo = () => {
  const { userInfo } = useAboutSwrHook()

  if (!userInfo) {
    return <Loading />
  }

  return (
    <div className="intro-text text-right">
      <h1 className="text-5xl font-bold text-gray-700 py-8">{userInfo.bio}</h1>
      <p className="text-7xl text-gray-700">{userInfo.title}</p>
      <p className="text-7xl text-gray-700">{userInfo.subTitle}</p>
      <p className="text-4xl text-rose-400 py-8">{userInfo.date}</p>
    </div>
  )
}

export default UserInfo
