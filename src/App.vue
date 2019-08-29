<template lang="pug">
  #app
    app-header
    router-view
</template>

<script>
import AppHeader from '@/components/AppHeader'


export default {
  name: 'app',
  components: {
    AppHeader
    }
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';

  html {
    font-size: 10px;
  }
</style>
