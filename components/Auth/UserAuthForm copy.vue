<template>
  <v-app id="inspire" class="login">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="isValid">
                  <v-select
                    v-if="isRegister"
                    v-model="userInfo.role"
                    :items="userRoles"
                    prepend-icon="mdi-account-details"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="User Role"
                    required
                  ></v-select>
                  <v-text-field
                    v-if="isRegister"
                    v-model="userInfo.name"
                    label="Name"
                    name="name"
                    type="text"
                    prepend-icon="mdi-account"
                    :rules="nameRules"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="userInfo.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-email"
                    type="email"
                    :rules="emailRules"
                    required
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    v-model="userInfo.password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    required
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                  <v-text-field
                    v-if="isRegister"
                    id="passwordConfirm"
                    v-model="userInfo.passwordConfirm"
                    label="Confirm Password"
                    name="passwordConfirm"
                    prepend-icon="mdi-lock"
                    :type="showPassword ? 'text' : 'password'"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="passwordRules"
                    required
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="!isValid"
                  color="primary"
                  @click.prevent="submitForm(userInfo)"
                  >{{ buttonText }}</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
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
