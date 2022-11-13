import api from '.'

export const getTodos = () => api.get('/books')
export const register = (data: any) => api.post('/users', data)
