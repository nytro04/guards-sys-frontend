import { axios } from './index'

export default {
  /**
   * @desc attempts to authenticate the user
   *
   *
   */

  async authenticateUser(credentials) {
    try {
      const response = await axios.post('/users/login', credentials)
      return await Promise.resolve(response.data)
    } catch (error) {
      return await Promise.reject(error.response.data)
    }
  }
}

// authenticateUser(credentials) {
//     return axios
//       .post("login/manager", credentials)
//       .then(response => Promise.resolve(response.data))
//       .catch(error => Promise.reject(error.response.data));
//   },
