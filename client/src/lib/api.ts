import axios from 'axios'

const baseURL = import.meta.env.VITE_API || 'http://localhost:8080'
export const api = axios.create({ baseURL })

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token')
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})
