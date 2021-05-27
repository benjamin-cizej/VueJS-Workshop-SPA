<template>
  <a :href="path" @click.prevent="handleClick">{{ title }}</a>
</template>

<script>
export default {
  name: 'Link',
  props: {
    path: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    }
  },
  methods: {
    handleClick() {
      this.$router.push({
        path: this.path
      })
    }
  }
}
</script>

<style scoped>

</style>