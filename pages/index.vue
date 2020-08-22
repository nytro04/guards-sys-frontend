<template>
  <div class="">
    <h1>Home page</h1>
    <!-- <Login /> -->
  </div>
</template>

<script>
export default {
  components: {
    // Login: () => import('~/components/Auth/Login')
  },
  head() {
    return {
      title: '',
      // %s represents title from child pages
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
  middleware: 'auth'
  // layout can only be in top level pages
  // layout: 'login'
}
</script>
