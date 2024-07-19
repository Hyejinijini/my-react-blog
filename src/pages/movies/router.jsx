import React, { lazy } from 'react'

const Movie = lazy(() => import('@pages/movies/Movies.jsx'))

const router = [
  {
    path: 'movies',
    element: <Movie />
  }
]

export default router
