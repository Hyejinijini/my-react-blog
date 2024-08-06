// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { ABOUT_ME_URL } from '@/api/keys/about/url.js'

export const handlers = [
  http.get(ABOUT_ME_URL, () => {
    return HttpResponse.json({
      id: '1',
      title: '저는 방혜진',
      subTitle: '입니다.',
      bio: '안녕하세요 ♪(´▽｀)',
      date: '2024-01-01'
    })
  })
]
