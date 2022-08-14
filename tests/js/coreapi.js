/**
 * 全局配置文件
 */
const config = {
  /**
   * 网络请求的超时时间
   */
  timeout: 30 * 1000,

  /**
   * 请求的 host （联调时方便直连后端每个微服务）
   */
  host: {
    core: 'http://121.40.80.90:8070'
    // core: 'http://localhost:8070'
  }
}

/**
 * 系统所有请求的请求路径
 * @type {{core: {}}}
 */
const urls = {
  /**
   * 核心模块
   */
  core: {
    login: `${config.host.core}/login/`, // 获取用户信息
    kline: `${config.host.core}/kline/`, // 获取k线数据
    load: `${config.host.core}/load/` // 获取列表
  }
}

// 创建 axios 对象
const axiosInstance = axios.create({
  timeout: config.timeout
})

// 显示错误信息
// const showError = (msg) => Message.error({
//   message: msg,
//   type: 'error',
//   duration: 3 * 1000
// })

// 请求拦截器
axiosInstance.interceptors.request.use(
  config => {
    // 后面需要设置 token
    return config
  },
  error => {
    console.error(error)
    // showError('app.sendRequestError')
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    // HTTP 状态码为 200 表示成功，其他情况均为失败
    if (response.status === 200) {
      return Promise.resolve(response.data)
    }
    // const respData = response.data
    // Message.error(`${respData.msg}(${respData.code})`)
    return Promise.reject(response.data)
  },
  error => {
    console.error(error)
    const { code, message } = error
    if (code === 'ECONNABORTED' || message === 'Network Error') { // 请求超时
      // showError('app.requestTimeoutError')
      return Promise.reject(error)
    }
    if (error.response) {
      if (error.response.status >= 400 || error.response.status <= 404) {
        // 针对无权限的处理
      } else {
        // showError(`${error.response.data.msg}(${error.response.data.code})`)
      }
    }
    return Promise.reject(error)
  }
)

createApi = (url, method, data) => {
  const config = {}
  if (method === 'get') {
    config.params = data
  } else {
    config.data = data || {}
  }
  return axiosInstance({
    url,
    method,
    ...config
  })
}

const get = async (url, data) => createApi(url, 'get', data)
const post = async (url, data) => createApi(url, 'post', data)


/**
 * k线
 */
const kline = async (code, period = 'day') => {
  let url = urls.core.kline + code + '/' + period
  try {
    let result = await get(url)
    return Promise.resolve(result)
  } catch (e) {
    return Promise.reject(e)
  }
}

const login = async (uid) => {
  let url = urls.core.login + uid
  try {
    let result = await get(url)
    return Promise.resolve(result)
  } catch (e) {
    return Promise.reject(e)
  }
}

const load = async (p) => {
  let url = urls.core.load + p
  try {
    let result = await get(url)
    return Promise.resolve(result)
  } catch (e) {
    return Promise.reject(e)
  }
}
