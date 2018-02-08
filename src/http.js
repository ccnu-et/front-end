// axios
import axios from 'axios'

// create an instance
const http = axios.create({
  baseURL: 'http://127.0.0.1:3000/api'
  // baseURL: 'http://119.23.233.202:3000/api'
})

export default http
