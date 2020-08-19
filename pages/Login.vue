<template>
  <div>
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

<style scoped></style>
