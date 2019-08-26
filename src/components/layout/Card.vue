<template lang='pug'>
  .card(:style="cardStyle")
    .card-header(:style="headerStyle")
      slot(name="header")
    .card-body(:style="bodyStyle")
      .spacer
      slot(name="body")
      .spacer
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardWidth: {
      default: '40rem'
    },
    headerColor: {
      default: 'darkgrey'
    },
    headerText: {
      default: 'white'
    },
    bodyColor: {
      default: 'lightgrey'
    },
    bodyText: {
      default: 'black'
    },
    shadowColor: {
      default: '#666'
    }
  },
  computed: {
    cardStyle () {
      return {
        width: this.cardWidth,
        boxShadow: `0rem 0.15rem 0.3rem ${this.shadowColor}`
      }
    },
    headerStyle () {
      return {
        background: this.headerColor,
        color: this.headerText,
        boxShadow: `0rem 0.15rem 0.3rem ${this.shadowColor}`
      }
    },
    bodyStyle () {
      return {
        background:this.bodyColor,
        color: this.bodyText
        }
    }
  }

}
</script>

<style lang='scss'>
@import '@/scss/base.scss';
.card{
  width: 40rem;
  height: auto;
  border-radius: 2.5rem;
  overflow: hidden;
  margin: 2rem;
}

.card-header{
  width: inherit;
  font-size: 4rem;
  height: 20%;
  font-family: $base-font;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: relative;
}

.card-body{
  width: inherit;
  height: 80%;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.spacer{
  width: 100%;
  height: 2rem
}
</style>
