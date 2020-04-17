<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'Home Page do Site'
    }
  }
}
</script>

<style scoped>

</style>
