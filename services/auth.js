/** Decided not to continue with this auth Api services: architecture
 * I dont have enough knowledge on how nuxt auth
 *  works with store and how it will interact
 * my custom function. Will comeback and
 * refactor when need be.(have enough knowledge)
 * I'm siding with simplicity
 * */

export default {
  /** Register new user (routes accessible only to admins)
   *
   * @param {Object} credentials UserInfo (name, email and password)
   * @return {Object}  UserInfo (name, email and role)
   */
  registerUser(credentials) {
    return this.$axios
      .post('/users/register', credentials)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error.response.data))
  }
}
