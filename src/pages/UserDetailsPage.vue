<template>
  <div>
    User details for user ID: {{ userId }}

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'UserDetailsPage',
  created () {
    console.log(this.$route.query)
  },
  data() {
    return {
      userId: this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>