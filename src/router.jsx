import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/Loading.jsx'
import NotFound from '@common/components/NotFound.jsx'

// pages
import home from '@pages/home/router.jsx'

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
    children: [...home],
    errorElement: <NotFound />
  }
])

export default router
