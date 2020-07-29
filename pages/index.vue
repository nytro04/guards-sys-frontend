<template>
  <div class="container">
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
