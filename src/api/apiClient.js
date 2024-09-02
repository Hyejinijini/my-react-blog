import apiClient from '@api/config.js'

// 이 함수는 지정된 url 로 get 요청을 보내고, 서버로부터 받은 데이터를 반환한다.
// url: 요청을 보낼 API 의 URL
// params: 요청에 사용할 쿼리 파라미터
export const getRequest = async (url, params) => {
  try {
    // Axios 를 통해 주어진 URL 로 GET 요청을 보냄
    const response = await apiClient.get(url, { params })
    // 서버로부터의 응답에서 실제 데이터를 반환
    return response.data
  } catch (error) {
    // 에러 처리
    // 요청이 실패하면, 콘솔에 에러 메시지를 출력하고, 에러를 호출한 함수로 다시 던짐
    console.error('GET request failed:', error)
    throw error
  }
}

export const postRequest = async (url, data) => {
  try {
    const response = await apiClient.post(url, data)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}

export const updateRequest = async (url, data) => {
  try {
    const response = await apiClient.put(url, data)
    return response.data
  } catch (error) {
    console.error('PUT request failed:', error)
    throw error
  }
}

export const deleteRequest = async (url, params) => {
  try {
    const response = await apiClient.delete(url, { params })
    return response.data
  } catch (error) {
    console.error('DELETE request failed:', error)
    throw error
  }
}
