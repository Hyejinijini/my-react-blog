import { create } from 'zustand'
import { devtools } from 'zustand/middleware' // 얘는 개발자도구에서 쓸 수 있어요.

// devtools 를 상용에서는 안나오게 해야 되잖아요.
const prod = import.meta.env.PROD

const createStore = (store) => {
  return prod ? create(store) : create(devtools(store))
}

export default createStore
