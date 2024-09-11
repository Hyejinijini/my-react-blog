import React, { lazy } from 'react'

const Guestbook = lazy(() => import('@pages/guestbook/Guestbook.jsx'))

const router = [
  {
    path: 'guestbook',
    element: <Guestbook />
  }
]

export default router
