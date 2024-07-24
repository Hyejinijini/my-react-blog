import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'

// common
import Layout from '@layouts/Layout.jsx'
import Loading from '@common/components/Loading.jsx'
import NotFound from '@common/components/NotFound.jsx'

// pages
import home from '@pages/home/router.jsx'
import about from '@pages/about/router.jsx'
import movie from '@pages/movies/router.jsx'
import food from '@pages/food/router.jsx'
import travel from '@pages/travel/router.jsx'
import HomeDetail from '@pages/home/router.jsx'
import Project from '@pages/projects/Projects.jsx'
import Contact from '@pages/contact/Contact.jsx'

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
    children: [...home, ...about, ...movie, ...food, ...HomeDetail, ...travel],
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
])

export default router
