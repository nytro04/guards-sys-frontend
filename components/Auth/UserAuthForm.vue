<template>
  <div class="auth">
    <div class="auth auth__form">
      <FormulateForm v-model="formValues" class="login-form">
        <h2 class="form-title">Login</h2>

        <FormulateInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Email address"
          validation="required|email"
        />

        <FormulateInput
          name="password"
          type="password"
          label="Password"
          placeholder="Your password"
          validation="required"
        />

        <FormulateInput type="submit" label="Register" />
      </FormulateForm>
    </div>
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
<style lang="scss" scoped>
.login-form {
  padding: 2em;
  border: 1px solid #a8a8a8;
  border-radius: 0.5em;
  // max-width: auto;
  height: 40vh;
  width: 40rem;
  box-sizing: border-box;
  background-color: whitesmoke;
}
.form-title {
  margin-top: 0;
}
.login-form::v-deep .formulate-input .formulate-input-element {
  max-width: none;
}
@media (min-width: 420px) {
  .double-wide {
    display: flex;
  }
  .double-wide .formulate-input {
    flex-grow: 1;
    width: calc(50% - 0.5em);
  }
  .double-wide .formulate-input:first-child {
    margin-right: 0.5em;
  }
  .double-wide .formulate-input:last-child {
    margin-left: 0.5em;
  }
}
</style>
