import React, { lazy } from 'react'

const Food = lazy(() => import('@pages/food/Food.jsx'))

const router = [
  {
    path: 'food',
    element: <Food />
  }
]

export default router
