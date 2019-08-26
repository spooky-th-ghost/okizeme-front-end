<template lang='pug'>
  #app-header
    .big-logo OKIZE.ME
</template>

<script>
import CB from '@/components/widgets/CartoonButton'

export default {
  name: 'app-header',
  components: {
    CB
  }
}
</script>

<style lang='scss'>
  #app-header{
    height: 10.5rem;
    width: 100vw;
    background: grey;
    display: flex;
    flex-flow: row nowrap;
  }

  .big-logo{
    font-weight: bold;
    word-wrap: break-word;
    color: white;
    font-size: 4rem;
    text-shadow: black -0.14rem 0.14rem;
    width: 10rem;
    background: rgb(255, 167, 5);
  }
</style>
