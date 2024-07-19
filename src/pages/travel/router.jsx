import React, { lazy } from 'react'

const Travel = lazy(() => import('@pages/travel/Travel.jsx'))

const router = [
  {
    path: 'travel',
    element: <Travel />
  }
]

export default router
