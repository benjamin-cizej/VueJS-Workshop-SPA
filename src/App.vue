<template>
  <div>
    <Link title="Home" path="/" />
    <Link title="Form" path="/form" />

    <router-view></router-view>
  </div>
</template>

<script>

import Link from './components/Link'
export default {
  name: 'App',
  components: { Link },
  created () {
    console.log(this.$store.state.user)
  }
}
</script>

<style>

</style>