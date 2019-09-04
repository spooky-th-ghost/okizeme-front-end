<template lang='pug'>
  .nav-link(@click.stop = 'visitLink' :style='navStyle' :class="{'nav-active': isCurrentRoute()}") {{capitalized}}

</template>

<script>
export default {
  props: {
    navAddress: {
      type: String,
      required: true
    },
     isRoute: {
       type: Boolean,
       default: true
     },
     typeSize: {
       type: String,
       default: '3rem'
     }
  },
  methods: {
    visitLink() {
      if (this.isRoute){
        if(!this.isCurrentRoute(this.navAddress)){
          this.$router.push({ name: `${this.navAddress}`})
        }
      } else {
        window.open(this.navAddress)
      }
    },
    isCurrentRoute() {
      return this.$route.name == this.navAddress
    }
  },
  computed: {
    navStyle() {
      return {
        'font-size': this.typeSize
      }
    },
    capitalized() {
      return this.navAddress.charAt(0).toUpperCase() + this.navAddress.slice(1)
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-link{
    font-weight: bold;
    font-family: $oswald;
   
    color: white;
    transition: 0.3s all;
    cursor: pointer;
    user-select: none;

    &:hover{
      color: black;
    }
  }

  .nav-active{
    color: black
  }
</style>
