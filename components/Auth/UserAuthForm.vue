<template>
  <div class="main-wrapper">
    
  </div>
</template>

<script>
export default {
  props: {
    submitForm: {
      required: true,
      type: Function
    },
    buttonText: {
      required: true,
      type: String
    },
    isRegister: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      // this.$refs.form.reset to reset form after form submission
      isValid: true,
      showPassword: false,
      isLoading: false,
      userRoles: ['user', 'staff', 'admin', 'super-amin'],
      userInfo: {
        role: '',
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) =>
          (v && v.length > 3) || 'Name must be more than three(3) character'
      ],
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'Please provide a valid email'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length >= 8) ||
          'Password must be eight(8) or more characters',
        (v) =>
          /(?=.*[A-Z])/.test(v) ||
          'Password must have at least one(1) uppercase letter',
        (v) =>
          /(?=.*\d)/.test(v) || 'Password must have at least one(1) number',
        (v) =>
          /([!@#$%^&*])/.test(v) ||
          'Password must have at least one(1) special character eg. !@#$%^&*'
      ]
    }
  },
  methods: {},
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
  }

  // todo: Refactor and build user auth form for login and register
  // props: {
  //   source: String
  // }
}
</script>
