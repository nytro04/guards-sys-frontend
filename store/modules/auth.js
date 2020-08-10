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

const namespaced = true

export default {
  state,
  namespaced
}
