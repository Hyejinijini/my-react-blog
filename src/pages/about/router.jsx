import React, { lazy } from 'react'

const About = lazy(() => import('@pages/about/AboutMe.jsx'))

const router = [
  {
    path: 'about',
    element: <About />
  }
]

export default router
