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
                  <v-text-field
                    v-model="userInfo.email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
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
                    type="password"
                    :rules="passwordRules"
                    required
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :disabled="!isValid" color="primary">Login</v-btn>
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
  data() {
    return {
      // this.$refs.form.reset to reset form after form submission
      isValid: true,
      showPassword: false,
      userInfo: {
        email: '',
        password: ''
      },
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          'Please provide a valid email'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) =>
          (v && v.length >= 8) || 'Password is be eight(8) or more characters',
        (v) =>
          /(?=.*[A-Z])/.test(v) ||
          'Password must have at least one(1) uppercase',
        (v) =>
          /(?=.*\d)/.test(v) || 'Password must have at least one(1) number',
        (v) =>
          /([!@#$%^&*])/.test(v) ||
          'Password must have at least one(1) special character eg. !@#$%^&*'
      ]
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
  }
  // props: {
  //   source: String
  // }
}
</script>
