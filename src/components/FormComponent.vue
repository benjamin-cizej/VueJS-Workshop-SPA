<template>
  <div>
    <h1>{{ title }}</h1>
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
  props: {
    title: {
      type: String,
      required: true
    }
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