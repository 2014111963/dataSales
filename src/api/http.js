import axios from 'axios'
import store from '../store/index'

// axios 配置
axios.defaults.timeout = 8000
// axios.defaults.baseURL = 'https://api.github.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.userProfile.authorization) { // 判断token是否存在
      config.headers.Authorization = store.state.userProfile.authorization // 将token设置成请求头
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status >= 400) {
      return Promise.reject(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}

export function put (url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}

export function patch (url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}

export function delete_ (url) {
  return new Promise((resolve, reject) => {
    axios.delete(url)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err.data)
      })
  })
}
