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
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
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
      valid: false,
      showPassword: false,
      userInfo: {
        email: '',
        password: ''
      }
    }
  }
  // head() {
  //   return {
  //     title: 'title',
  //     titleTemplate: `%s ${this.email} - Guard sys`,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: 'custom description'
  //       }
  //     ]
  //   }
  // }
  // props: {
  //   source: String
  // }
}
</script>
