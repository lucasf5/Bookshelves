import axios from 'axios'

const HOST = process.env.REACT_APP_API_HOST || 'localhost'
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || 'http'

const api = axios.create({
  // baseURL: `https://librairie-production.up.railway.app`
  baseURL: `http://localhost:3001`
})

export default api
