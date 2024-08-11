import axios from 'axios'

const apiClient = axios.create({
  baseURL: '', // 실제로 사용하는 url 이 올거임.
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

// 클라이언트에서 서버에 요청했을 때 인터셉트라는 공간에 들어감. config 안에 요청에 대한 데이터가 싹 담겨있음. 요청에 대한 데이터를 핸들링 -> if 부분 해야돼. (그럴대 사용) 방어코드 같은 개념
apiClient.interceptors.request.use(
  (config) => {
    // localStorage에서 토큰을 가져옵니다. (또는 다른 저장소)
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient
