// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

// home
import { PROFILE_URL } from '@api/keys/sidebar/url.js'

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
  })
]
