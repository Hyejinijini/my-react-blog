import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/Loading.jsx'
import NotFound from '@common/components/NotFound.jsx'

// pages
import home from '@pages/home/router.jsx'
import about from '@pages/about/router.jsx'
import movie from '@pages/movies/router.jsx'
import travel from '@pages/travel/router.jsx'
import food from '@pages/food/router.jsx'
import HomeDetail from '@pages/home/router.jsx'

const Project = lazy(() => import('@pages/projects/Projects.jsx'))
const Contact = lazy(() => import('@pages/contact/Contact.jsx'))
const Test = lazy(() => import('@pages/test/Test.jsx'))
const Detail = lazy(() => import('@pages/detail/Detail.jsx'))

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
    children: [...home, ...about, ...movie, ...travel, ...food, ...HomeDetail],
    errorElement: <NotFound />
  },
  {
    path: '/projects',
    element: <Project />,
    errorElement: <NotFound />
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <NotFound />
  },
  {
    path: '/test',
    element: <Test />,
    errorElement: <NotFound />
  },
  {
    path: '/blog/:id',
    element: <Detail />,
    errorElement: <NotFound />
  }
])

export default router
