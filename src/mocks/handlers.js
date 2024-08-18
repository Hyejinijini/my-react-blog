// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'
import { ABOUT_ME_URL } from '@/api/keys/about/url.js'
import { ABOUT_LIST_URL } from '@api/keys/about/url.js'
import { ABOUT_README_URL } from '@api/keys/about/url.js'
import { ABOUT_DETAIL_URL } from '@api/keys/about/url.js'
import { DETAIL_PAGE_URL } from '@api/keys/about/url.js'
import { PROFILE_URL } from '@api/keys/home/url.js'

export const handlers = [
  http.get(ABOUT_ME_URL, () => {
    return HttpResponse.json({
      id: '1',
      title: '저는 방혜진',
      subTitle: '입니다.',
      bio: '안녕하세요 ♪(´▽｀)',
      date: '2024-01-01'
    })
  }),
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
  http.get(ABOUT_LIST_URL, () => {
    return HttpResponse.json([
      {
        id: 1,
        title: 'personal-things',
        content: '개인적인 것들'
      },
      {
        id: 2,
        title: 'hobbies-and-interests',
        content: '취미와 관심있는 것들'
      }
    ])
  }),
  http.get(ABOUT_README_URL, () => {
    return HttpResponse.json([
      {
        id: 1,
        title: '🎀 개인적인 기록공간',
        content: '개인적인 것들을 기록하는 공간입니다.'
      },
      {
        id: 2,
        title: '나의 취미생활 ✨',
        content: '취미와 관심있는 것들을 기록하는 공간입니다.'
      }
    ])
  }),
  http.get(ABOUT_DETAIL_URL, () => {
    return HttpResponse.json([
      {
        id: 1,
        folder: 'personal',
        content: 'Add: 송도나들이',
        update: '2 days ago'
      },
      {
        id: 2,
        folder: 'hobby',
        content: 'Add: 첫 번째 취미',
        update: '2 months ago'
      }
    ])
  }),
  http.get(DETAIL_PAGE_URL, () => {
    return HttpResponse.json([
      {
        id: 1,
        folder: '.personal',
        code: `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>송도 나들이</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
      body {
        background: url("KakaoTalk_20240809_073318598.jpg") no-repeat center center fixed;
        background-size: cover;
      }
    </style>
  </head>
  <body class="text-gray-900 flex flex-col items-center justify-center min-h-screen py-6 px-4">
    <div class="bg-white shadow-lg rounded-lg max-w-3xl w-full mx-auto p-6">
      <header class="mb-6">
        <h1 class="text-4xl font-extrabold text-gray-800 mb-2">송도 나들이</h1>
        <p class="text-gray-600 text-sm mb-2">작성자: 방혜진</p>
        <p class="text-gray-600 text-sm mb-4">2024년 8월 9일</p>
      </header>

      <figure class="mb-6">
        <img src="https://images.unsplash.com/photo-1596495787979-81794c053b14" alt="송도 바다" class="w-full h-64 object-cover rounded-lg shadow-md" />
      </figure>

      <article>
        <p class="text-lg leading-relaxed mb-4">오랜만에 송도가서 산책하고 왔는데 너무 좋았다. 여름이라 그런지 센트럴파크에서 문보트 타는 사람들이 많았는데 밤에 보니까 꽤 예뻣다. 송도는 낮에도 예쁘지만 야경이 정말 예쁜 것 같다.</p>
        <p class="text-lg leading-relaxed mb-4">자전거도 탔는데 전동 자전거라는 걸 처음 타봤다. 따릉이보다 훨 비싸긴한데 페달을 한 번만 밟아도 슝~~~ 하고 앞으로 나가서 타고 다니기엔 진짜 편할 것 같다. 밤에 타서 바람도 잘 불고 너무너무 좋았다.</p>
        <p class="text-lg leading-relaxed mb-4">한옥마을도 구경했는데 옛날에 하던 고리던지기? 같은 프로그램도 10년이 넘었는데 아직도 하고 있어서 신기했다. 그래서 꽃사슴 정원도 아직도 있나? 하고 산책하면서 들렀는데 아직도 있어서 사진 한 방 찍어주고 왔다. 힐링데이</p>
      </article>

      <footer class="mt-6 border-t border-gray-200 pt-4 text-center">
        <p class="text-gray-600 text-sm">© 2024 홍길동. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
`,
        detail: 'Add: 송도나들이',
        update: '2 days ago'
      },
      {
        id: 2,
        folder: 'hobby',
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>여행</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
    <style>
      body {
        background: url("KakaoTalk_20240809_074153837.jpg") no-repeat center center fixed;
        background-size: cover;
      }
    </style>
  </head>
  <body class="text-gray-900 flex flex-col items-center justify-center min-h-screen py-6 px-4">
    <div class="bg-white shadow-lg rounded-lg max-w-3xl w-full mx-auto p-6">
      <header class="mb-6">
        <h1 class="text-4xl font-extrabold text-gray-800 mb-2">여행하는 취미</h1>
        <p class="text-gray-600 text-sm mb-2">작성자: 방혜진</p>
        <p class="text-gray-600 text-sm mb-4">2024년 8월 9일</p>
      </header>

      <figure class="mb-6">
        <img src="https://images.unsplash.com/photo-1473363151877-d02013c4a7c2" alt="여행" class="w-full h-64 object-cover rounded-lg shadow-md" />
      </figure>

      <article>
        <p class="text-lg leading-relaxed mb-4">내가 어쩌다 여행에 빠지게 됐을까 부산에 처음 놀러갔을 때 빠지게 된 것 같다. 여행을 하면서 느끼는 설렘과 추억을 남기는 과정은 정말 평생 잊을 수 없는 기억을 만드는 것 같다.</p>
        <p class="text-lg leading-relaxed mb-4">최근에 다녀온 여행지는 여수와 부산이다. 여수에는 여수밤바다 라는 노래가 말해주듯이 밤바다를 보면서 포차거리에서 맛있는 것도 먹고 케이블카도 타고 버스킹도 볼 수 있었다. 밤에는 불꽃놀이도 했는데 보진 못해서 좀 아쉬웠다.</p>
        <p class="text-lg leading-relaxed mb-4">
          부산에서는 광안리 해변을 걸으면서 푸바오랑 사진도 찍고 느린우체통에 편지도 하나 보냈다. 1년뒤에 집으로 배송온다고 하는데 친구가 뭐라고 써줬을지 기대된다. 그리고 드론쇼도 봤는데 파리올림픽 관련 드론쇼가 진행됐다. 진짜 진짜 짱 멋졌다 !!! 드론쇼와 동시에 나룻배(?) 들이 한꺼번에 폭죽을 쐈는데
          너무너무 멋졌다.
        </p>
      </article>

      <footer class="mt-6 border-t border-gray-200 pt-4 text-center">
        <p class="text-gray-600 text-sm">© 2024 홍길동. All rights reserved.</p>
      </footer>
    </div>
  </body>
</html>
`,
        datail: 'Add: 첫 번째 취미',
        update: '2 months ago'
      }
    ])
  })
]
