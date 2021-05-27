<template>
  <div>
    <input type="text" :value="value" >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'FormComponent',
  created () {
    console.log(this.value)
  },
  computed: {
    ...mapState({
       value: (state) => state.formModule.inputValue
    })
  }
}
</script>

<style scoped>

</style>