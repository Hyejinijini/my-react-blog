import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@/router.jsx'

import '@assets/styles/css/index.css'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser.js')

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/')) {
        console.log('/api/ 가 포함되지 않은 요청 url', request.url)
        return
      }

      // 그 외의 처리되지 않은 요청에 대해서는 경고 출력
      print.warning()
    }
  })
}

enableMocking().then(() => {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  }
})
