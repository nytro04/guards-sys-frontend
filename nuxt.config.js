import colors from 'vuetify/es5/util/colors'

require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  // env: {
  //   VUE_APP_BASE_API_URL
  // },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Guard-sys',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#eee' },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios', ssr: true },
    { src: '~/plugins/vue-formulate', ssr: true }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    // '@nuxtjs/toast'
    [
      'vue-toastification/nuxt',
      {
        timeout: 3000,
        draggable: false
        // hideProgressBar: true
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
    // credentials: true
  },
  // toast: {
  //   position: 'top-right',
  //   duration: 3000,
  //   register: [
  //     // Register custom toasts
  //     {
  //       name: 'my-error',
  //       message: 'Oops...Something went wrong',
  //       options: {
  //         type: 'error'
  //       }
  //     }
  //   ]
  // },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  router: {
    middleware: ['auth']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  auth: {
    redirect: {
      login: '/login',
      logout: '/' // change to login later. check article
      // home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/users/login',
            method: 'post',
            propertyName: 'token'
            // propertyName: 'false'
          },
          logout: {
            url: '/users/logout',
            method: 'get'
          },
          user: false // set to false because we dont have a user endpoint
          // logout: { url: '/auth/logout', method: 'post' },
          // user: {
          //   url: '/users/login',
          //   method: 'post',
          //   propertyName: 'user'
          // }

          // user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        },

        tokenName: 'guards-jwt',
        autoFetchUser: false
        // tokenRequired: true,
        // tokenType: 'bearer'
        // globalToken: true,
      }
    }
  }
}
