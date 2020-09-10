<template>
  <v-app class="grey lighten-4" dark>
    <v-navigation-drawer
      v-model="drawer"
      class="deep-pupple accent-4"
      dark
      :mini-variant="miniVariant"
      :clipped="clipped"
      app
    >
      <v-list-item>
        <v-list-item-avatar>
          <img src="~/assets/img/guard-sys-logo-temp.jpg" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">
            Guard-sys
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- navbar goes here  -->
    <!-- <Navbar></Navbar> -->
    <v-app-bar :clipped-left="clipped" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div v-if="$auth.loggedIn">
        <!-- <v-menu offset-y min-width="200">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-avatar v-bind="attrs" v-on="on">
              <img src="~/assets/img/guard-sys-logo-temp.jpg" />
            </v-list-item-avatar>

            {{ $auth.user.name }}
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in userItems" :key="index">
              <v-list-item-title>{{ item.item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu> -->

        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition"
        >
          <router-link
            v-ripple
            slot="activator"
            class="toolbar-items"
            to="/notifications"
          >
            <v-badge color="error" overlap>
              <v-list-item-avatar v-bind="attrs" v-on="on">
                <img src="~/assets/img/guard-sys-logo-temp.jpg" />
              </v-list-item-avatar>
              <template slot="badge">
                <!-- {{ notifications.length }} -->
                7
              </template>
              <!-- <v-icon color="tertiary">mdi-bell</v-icon> -->
            </v-badge>
          </router-link>
          <v-card>
            <v-list dense>
              <v-list-tile
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-tile-title v-text="notification" />
              </v-list-tile>
            </v-list>
          </v-card>
        </v-menu>

        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>

      <!-- <div v-if="!auth.loggedIn"> -->
      <!-- <v-btn @click.prevent="logOut" text to="/login">Logout</v-btn> -->
      <!-- </div> -->

      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  components: {
    // Navbar: () => import('@/components/layout/Navbar'), // only load global components eg. navbar and footer in the defaults layout.
    Footer: () => import('@/components/layout/Footer')
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      // fixed: false,
      userItems: [
        {
          item: 'Profile',
          to: '/user'
        },
        {
          item: 'profile',
          to: '/to'
        },
        {
          item: 'logout',
          to: '/logout'
        }
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Guard-sys'
    }
  }
  // computed: {
  //   ...mapState(['auth'])
  // }
}
</script>
