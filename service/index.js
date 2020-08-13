import Axios from 'axios'
// import Config from '~/config' 
import store from '~/store'

export const axios = Axios.create({
  // baseURL: Config[process.env.NODE_ENV].baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
  //   baseURL: Config[process.env.NODE_ENV].baseURL
})

axios.interceptors.request.use((config) => {
  const apiToken = store.getters['Auth/getToken']

  if (apiToken && !config.headers.common.Authorization) {
    config.headers.common.Authorization = `Bearer ${apiToken}`
  }

  return config
})
