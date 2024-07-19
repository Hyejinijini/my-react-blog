import React, { lazy } from 'react'

const Home = lazy(() => import('@pages/home/Home.jsx'))
const HomeDetail = lazy(() => import('@pages/home/components/HomeDetail.jsx'))

const router = [
  {
    path: '',
    element: <Home />
  },
  {
    path: 'detail/:type/:id',
    element: <HomeDetail />
  }
]

export default router
