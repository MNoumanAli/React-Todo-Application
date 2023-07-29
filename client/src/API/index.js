import axios from 'axios'

const API = axios.create({baseURL : "http://localhost:5000"})
API.interceptors.request.use((req) => {
    if(localStorage.getItem('user'))
    {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
    }
    return req;
})



export const getTodos = async () => await API.get('/getTodos')
export const login = (data) => API.post('/login', data)
export const signup = (data) => API.post('/signup', data)
export const createTodo = async (data) => await API.post('/create', data)
export const deleteTodo = async (p) => await API.post('/del', p).then(res => console.log(res)).catch(error => {
    console.log(error.response)
});
export const updateTodo = async (data) => await API.put('/update', data)