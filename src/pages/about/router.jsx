import About from '@pages/about/About.jsx'
import AboutDetail from '@pages/about/components/AboutDetail.jsx'
import DetailPage from '@pages/about/components/AboutDetail.jsx'

const router = [
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'about/:id',
    element: <AboutDetail />
  },
  {
    path: 'about/:id/detail/:id',
    element: <DetailPage />
  }
]

export default router
