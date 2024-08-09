import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/Loading.jsx'
import NotFound from '@common/components/NotFound.jsx'
import NewWrite from '@common/components/NewWrite.jsx'

// pages
import home from '@pages/home/router.jsx'
import about from '@pages/about/router.jsx'
import Project from '@pages/projects/Projects.jsx'
const DetailPage = lazy(() => import('@pages/about/components/DetailPage.jsx'))

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
    children: [...home, ...about],
    errorElement: <NotFound />
  },
  {
    path: '/projects',
    element: <Project />,
    errorElement: <NotFound />
  },
  {
    path: 'about/:id/detail/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <DetailPage />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: '/write',
    element: <NewWrite />,
    errorElement: <NotFound />
  }
])

export default router
