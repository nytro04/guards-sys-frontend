import { AUTHENTICATE } from '../mutation-type'
import UserServices from '~/service/auth'

const tokenName = 'guards-sys-token'
const userName = 'guards-sys-user'
const checkType = (value) => {
  if (value === 'undefined') {
    return undefined
  } else if (value === 'true') {
    return true
  } else if (value === false) {
    return false
  } else if (value == null) {
    return null
  }

  return true
}

const state = {
  /**
   * isLoggedIn: !! means, check if data exist and return Boolean value
   * user: checktype, if exist (true) change JSON data into
   *  JS object and return it else return empty object
   * token: checktype, if exist (true) return value else return null
   */
  auth: {
    isLoggedIn: !!localStorage.getItem(tokenName),
    user: checkType(localStorage.getItem(userName))
      ? JSON.parse(localStorage.getItem(userName))
      : {},
    token: checkType(localStorage.getItem(tokenName))
      ? localStorage.getItem(tokenName)
      : null
  }
}

const getters = {
  /**
   * @desc Get the authenticated token for user
   * @param {Object} state
   * @returns {String} token
   *
   */
  getToken(state) {
    return state.auth.token
  }
}

const actions = {
  /**
   * action commits allows us to pass data from an action to a mutation
   * it takes the name of the function as string adn the data you are passing
   */

  async authenticateUser({ commit }, credentials) {
    try {
      const response = await UserServices.authenticateUser(credentials)
      commit(AUTHENTICATE, response)
      return await Promise.resolve(response)
    } catch (error) {
      return await Promise.reject(error)
    }
  }
  // authenticateUser({ commit }, credentials) {
  //   return UserServices.authenticateUser(credentials)
  //     .then((response) => {
  //       commit(AUTHENTICATE, response)
  //       return Promise.resolve(response)
  //     })
  //     .catch((error) => {
  //       return Promise.reject(error)
  //     })
  // }
}

const namespaced = true

export default {
  state,
  getters,
  actions,
  namespaced
}
