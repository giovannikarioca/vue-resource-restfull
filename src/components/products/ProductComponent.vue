<template>
  <div>
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    msg: String
  },
  data () {
    return {
      title: 'Lista de Produtos'
    }
  }
}
</script>

<style scoped>

</style>