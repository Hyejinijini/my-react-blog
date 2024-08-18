import React, { lazy } from 'react'

const Calendar = lazy(() => import('@pages/calendar/Calendar.jsx'))

const router = [
  {
    path: 'calendar',
    element: <Calendar />
  }
]

export default router
