<template>
  <button
      type="button"
      @click="handleLogin"
  >{{ buttonLabel }}</button>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'

export default {
  name: 'TestPage',
  created () {
    console.log(this.user)
  },
  methods: {
    handleLogin() {
      if (this.isUserLoggedIn) {
        this.setUserAction({
          username: '',
          accessToken: ''
        })
      } else {
        this.setUserAction({
          username: 'test',
          accessToken: '12345'
        })
      }
    },
    ...mapActions([
      'setUserAction'
    ])
  },
  computed: {
    buttonLabel() {
      if (this.isUserLoggedIn) {
        return 'Logout'
      }

      return 'Login'
    },
    ...mapState([
      'user'
    ]),
    ...mapGetters([
      'isUserLoggedIn'
    ]),
  }
}
</script>

<style scoped>

</style>