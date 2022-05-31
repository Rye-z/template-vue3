import axios from 'axios'

const instance = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // timeout
  timeout: 5000,
})

const setToken = () => {}

instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    setToken()
    return config
  },
  err => Promise.reject(err),
)

const handleCookieExpired = () => {}
/*
[Response Schema |Axios Docs](https://axios-http.com/docs/res_schema)
{
  // `data` is the response that was provided by the server
  data: {},
  // `status` is the HTTP status code from the server response
  status: 200,
  // `statusText` is the HTTP status message from the server response
  statusText: 'OK',
  // `headers` the HTTP headers that the server responded with
  // All header names are lower cased and can be accessed using the bracket notation.
  // Example: `response.headers['content-type']`
  headers: {},
  // `config` is the config that was provided to `axios` for the request
  config: {},
  // `request` is the request that generated this response
  // It is the last ClientRequest instance in node.js (in redirects)
  // and an XMLHttpRequest instance in the browser
  request: {}
}
**/
instance.interceptors.response.use(({
  data,
  headers,
}) => {
  // handle image
  if (headers['content-type']?.indexOf('image') > -1)
    return data

  // custom error
  if (!data.success) {
    const { code } = data

    if (code === 4011)
      return Promise.reject({ msg: '用户名或者密码错误' })

    return Promise.reject(data)
  }

  return data.data
}, (error) => {
  if (error.response.status === 400)
    return Promise.reject({ msg: '错误的请求格式' })

  // Cookie expired
  if (error.response.status === 401) {
    handleCookieExpired()
    return
  }

  // other error
  if (error.response?.data) {
    const { data } = error.response

    // data: { msg: 'message'}
    if (typeof data === 'object')
      return Promise.reject(data)

    // data: 'message'
  }

  return Promise.reject({ msg: '发生未知错误' })
})

export default instance
