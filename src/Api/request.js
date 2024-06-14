import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

//  请求拦截
request.interceptors.request.use((config) => {
  // console.log('发出一个请求:', config.url)

  return config
})

// 响应拦截
request.interceptors.response.use(
  (response) => {
    // console.log('响应一个请求:', response.data)

    return response
  },
  (error) => {
    console.log(error)
  }
)

export default request
