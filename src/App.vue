<template>
  <div>
    <TestComponent />
    <FormComponent />
  </div>
</template>

<script>

import TestComponent from './components/TestComponent'
import FormComponent from './components/FormComponent'
export default {
  name: 'App',
  components: { FormComponent, TestComponent },
  created () {
    console.log(this.$store.state.user)
  }
}
</script>

<style>

</style>