import axios from 'axios'

const api = axios.create({
  baseURL: 'https://maternidade.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api