import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/etc/Loading.jsx'
import NotFound from '@common/components/etc/NotFound.jsx'

// pages
import home from '@pages/home/router.jsx'
import blog from '@pages/blog/router.jsx'
import calendar from '@pages/calendar/router.jsx'
const DetailPage = lazy(() => import('@pages/blog/components/DetailPage.jsx'))
const BlogDetail = lazy(() => import('@pages/blog/components/BlogDetail.jsx'))
const BlogCreate = lazy(() => import('@pages/blog/components/BlogCreate.jsx'))

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
    children: [...home, ...blog, ...calendar],
    errorElement: <NotFound />
  },
  {
    path: 'blog/:id/detail/:id',
    element: (
      <Suspense fallback={<Loading />}>
        <DetailPage />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: 'blog/:title',
    element: (
      <Suspense fallback={<Loading />}>
        <BlogDetail />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: 'blog/create',
    element: (
      <Suspense fallback={<Loading />}>
        <BlogCreate />
      </Suspense>
    ),
    errorElement: <NotFound />
  }
])

export default router
