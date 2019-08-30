<template lang='pug'>
  .character-select
</template>

<script>
export default {
  name: 'character-select',
  props: {
    smallImage: {
      required: true,
      type: 'string'
    },
    heroImage: {
      required: true,
      type: 'string'
    },
    characterName: {
      required: true,
      type: 'string'
    },
    characterUrl: {
      required: true,
      type: 'string'
    }
  }
}
</script>

<style lang='scss'>

</style>
