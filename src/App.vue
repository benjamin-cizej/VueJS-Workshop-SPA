<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  created () {
    console.log(this.$store.state.user)
  }
}
</script>

<style>

</style>