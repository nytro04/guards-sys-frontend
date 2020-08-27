<template>
  <UserAuthForm
    :submitForm="registerUser"
    :buttonText="buttonText"
    :hasName="hasName"
  />
</template>

<script>
export default {
  components: {
    UserAuthForm: () => import('~/components/Auth/UserAuthForm')
  },
  // middlware: ['auth-admin'],
  // props: {
  //   loginUser
  // },
  data() {
    return {
      buttonText: 'Register',
      hasName: true
    }
  },
  methods: {
    async registerUser() {
      try {
        this.isLoading = true

        await this.$axios.post('/users/signup', this.userInfo)
        const res = await this.$auth.loginWith('local', {
          data: this.userInfo
        })
        this.isLoading = false
        const user = res.data.data.user
        this.$auth.setUser(user)

        // console.log('User ==', this.$auth.user)
        // this.$refs.form.reset()
      } catch (errors) {
        this.isLoading = false

        // console.log(errors)
      }
    }
  },
  head() {
    return {
      title: 'Register',
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
