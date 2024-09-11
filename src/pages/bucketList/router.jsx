import React, { lazy } from 'react'

const BucketList = lazy(() => import('@pages/bucketList/BucketList.jsx'))

const router = [
  {
    path: 'bucketList',
    element: <BucketList />
  }
]

export default router
