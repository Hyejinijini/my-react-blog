// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

// home
import { PROFILE_URL } from '@api/keys/sidebar/url.js'
import { BUCKETLIST_URL } from '@api/keys/bucketList/url.js'

const date = () => new Date().toISOString()

export const handlers = [
  http.get(PROFILE_URL, () => {
    return HttpResponse.json({
      id: 1,
      nickName: 'HYEHYE',
      name: 'Hyejin',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnofQS0P6zgg_gbUeMaCPPKS7vD1PVGhr0Q&s',
      bio: 'HYEHYE 블로그 ( •̀ ω •́ )✧',
      links: [
        { id: '1', url: 'https://hye-story-o0o.tistory.com/' },
        { id: '2', url: 'https://github.com/Hyejinijini' }
      ]
    })
  }),
  http.get(BUCKETLIST_URL, () => {
    return HttpResponse.json([
      {
        id: 1,
        description: '디즈니월드 가보기',
        priority: 4,
        category: '여행',
        createAt: date(),
        dueDate: ''
      },
      {
        id: 2,
        description: '두바이 초콜릿 먹어보기',
        priority: 1,
        category: '일상',
        createAt: date(),
        dueDate: '2024-09-16'
      },
      {
        id: 3,
        description: '필라테스 도전해보기',
        priority: 2,
        category: '운동',
        createAt: date(),
        dueDate: ''
      },
      {
        id: 4,
        description: '맥북 사기',
        priority: 2,
        category: '일상',
        createAt: date(),
        dueDate: ''
      },
      {
        id: 5,
        description: '밝은색으로 염색해보기',
        priority: 3,
        category: '일상',
        createAt: date(),
        dueDate: ''
      },
      {
        id: 6,
        description: 'JavaScript 로 토이프로젝트 해보기',
        priority: 1,
        category: '공부',
        createAt: date(),
        dueDate: '2024-10-04'
      }
    ])
  })
]
