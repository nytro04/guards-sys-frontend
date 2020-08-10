import Axios from 'axios'
import Config from './config'

export const axios = Axios.create({
  baseURL: Config[process.env.NODE_ENV].baseURL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
  //   baseURL: Config[process.env.NODE_ENV].baseURL
})
