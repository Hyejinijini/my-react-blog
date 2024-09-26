import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/etc/Loading.jsx'
import NotFound from '@common/components/etc/NotFound.jsx'

// pages
import home from '@pages/home/router.jsx'
import guestbook from '@pages/guestbook/router.jsx'
const Calendar = lazy(() => import('@pages/calendar/Calendar.jsx'))

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Layout>
    ),
    children: [...home, ...guestbook],
    errorElement: <NotFound />
  },

  {
    path: 'calendar',
    element: (
      <Suspense fallback={<Loading />}>
        <Calendar />
      </Suspense>
    ),
    errorElement: <NotFound />
  }
])

export default router
