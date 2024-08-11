import React, { lazy } from 'react'

const Home = lazy(() => import('@pages/home/Home.jsx'))

const router = [
  {
    path: '',
    element: <Home />
  }
]

export default router
