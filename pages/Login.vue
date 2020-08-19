<template>
  <div>
    <Login />
  </div>
</template>

<script>
export default {
  components: {
    Login: () => import('~/components/Auth/Login')
  }
}
</script>

<style scoped></style>
