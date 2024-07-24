import { getRequest, postRequest, updateRequest, deleteRequest } from '@api/apiClient.js'

export const getUsers = async () => {
  return await getRequest({ url: '/users' })
}

export const getUserById = async (userId) => {
  return await getRequest({ url: `/users/${userId}` })
}

export const createUser = async (userData) => {
  return await postRequest({ url: '/users', data: userData })
}

export const updateUser = async (userId, userData) => {
  return await updateRequest({ url: `/users/${userId}`, data: userData })
}

export const deleteUser = async (userId) => {
  return await deleteRequest({ url: `/users/${userId}` })
}
