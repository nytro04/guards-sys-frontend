<template>
  <UserAuthForm :submitForm="loginUser" :buttonText="buttonText" />
</template>

<script>
export default {
  components: {
    UserAuthForm: () => import('~/components/Auth/UserAuthForm')
  },
  data() {
    return {
      buttonText: 'Login'
    }
  },
  // props: {
  //   loginUser
  // },

  methods: {
    async loginUser(loginInfo) {
      try {
        this.isLoading = true
        const res = await this.$auth.loginWith('local', {
          data: loginInfo
        })
        this.isLoading = false

        const user = res.data.data.user
        this.$auth.setUser(user)
        this.$toast.success('Login Successful')
        // this.$toast.success(`Welcome ${this.$auth.user}`)

        // this.$refs.form.reset()
      } catch (err) {
        this.isLoading = false
        console.log(err.response)
        this.$toast.error(`Login Error: ${err.response.data.message}`, {
          timeout: 10000
        })

        // console.log(errors)
      }
    }
  },
  head() {
    return {
      title: 'Login',
      // titleTemplate: `%s ${this.email} - Guard sys`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'custom description'
        }
      ]
    }
  },
  layout: 'login'
}
</script>
