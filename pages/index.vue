<template>
  <div class="">
    <Login />
  </div>
</template>

<script>
export default {
  components: {
    Login: () => import('~/components/Auth/Login')
  },
  layout: 'login'
}
</script>
