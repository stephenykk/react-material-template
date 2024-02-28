import axios from 'axios'
import { createLogger } from './logger'
import { toast } from './toast'
import { setDefaults } from './base'

const logger = createLogger('request')

const { NAIM_BASE_API: baseURL } = import.meta.env

const axiosInst = axios.create()
axiosInst.defaults.baseURL = baseURL

const UNAUTH_CODE = 401

axiosInst.interceptors.request.use(
  (config) => {
    const defaultHeaders = {
      'Content-Type': 'application/json',
      ...(sessionStorage.token
        ? { Authorization: `jwt ${sessionStorage.token}` }
        : {}),
    }

    // fix by setting: config.data = true, avoid axios delete content-type header
    if (config.method?.toLocaleLowerCase() === 'get') {
      config.data = true
    }

    config.headers = setDefaults(config.headers ?? {}, defaultHeaders)

    return config
  },
  (error) => {
    logger.error('REQUEST FAIL:', error)
    return Promise.reject(error)
  },
)

axiosInst.interceptors.response.use(
  (res) => {
    logger.info('RESPONSE DATA:', res?.config?.url, res.data)
    return res
  },
  (error) => {
    if (error?.response?.status === UNAUTH_CODE) {
      const isLoginApi = error.config?.url?.startsWith('/auth')
      // const isLoginPage = location.hash.startsWith('#/login') || location.pathname.startsWith('/login')
      if (isLoginApi) {
        toast.error('login fail')
      } else {
        toast.error('please log in first', () =>
          console.log('should navigate to LOGIN page'),
        )
      }
    }

    logger.error('API Error:', error.config?.url, error)

    return Promise.reject(error)
  },
)

// export async function request(options = {}) {
//     return await axiosInst(options)
// }

const request = axiosInst

export { request }
