import About from '@pages/about/About.jsx'
import AboutDetail from '@pages/about/components/AboutDetail.jsx'
import DetailPage from '@pages/about/components/DetailPage.jsx'

const router = [
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'about/:title',
    element: <AboutDetail />
  },
  {
    path: 'about/:id/detail/:id',
    element: <DetailPage />
  }
]

export default router
