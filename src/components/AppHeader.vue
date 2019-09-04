<template lang='pug'>
  #app-header
    mq-layout(mq='tablet+')
      .header-container
        .logo-container
          span(class='logo big-text') OKI
          span(class='logo small-text') ZE.ME
        .nav-link-container
          nav-link(:navAddress = '"users"')
          nav-link(:navAddress = '"characters"')
        .auth-container
          .logged-in(v-if="$store.getters.isAuthenticated")
            nav-link(:navAddress = '"profile"')
          .logged-out(v-else)
            nav-link(:navAddress = '"login"')
    mq-layout(mq='mobile')
      .header-container
        .logo-container
          span(class='logo big-text') OKI
          span(class='logo small-text') ZE.ME 
        .mq-header-nav(@click="toggleDropDown") &#9776;
          .dropdown-content(:style='dropDownStyle')
            .logged-in(v-if="$store.getters.isAuthenticated")
              nav-link(:navAddress = '"profile"')
            .logged-out(v-else)
              nav-link(:navAddress = '"login"')
            nav-link(:navAddress = '"users"')
            nav-link(:navAddress = '"characters"')
</template>

<script>
import CB from '@/components/widgets/CartoonButton'

export default {
  name: 'app-header',
  components: {
    CB
  },
  data (){
    return {
      dropDownStyle: {
        left: '450px'
      }
    }
  },
  methods: {
    toggleDropDown (){
      if (this.dropDownStyle.left === '450px') {
        this.dropDownStyle.left = '275px'
      } else {
        this.dropDownStyle.left = '450px'
      }
    }
  }
}
</script>


<style lang='scss'>
  @import '@/scss/base.scss';

  .header-container{
    position: fixed;
    height: 8rem;
    width: 100vw;
    background: #FFA705;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    z-index: 100;
  }
  
  .logo-container{
    height: 6rem;
  }

  .nav-link-container{
    width: 40vw;
    height: 7rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: space-between;
  }

  .auth-container{
    width: 10vw;
    height: 7rem;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .logo{
    font-weight: bold;
    font-family: $oswald;
  }

  .big-text{
    font-size: 5rem;
    color: white;
  }

  .small-text{
    font-size: 2rem;
    line-height: 4rem;
    color: black;
    
  }

  .mq-header-nav{
    font-size: 5rem;
    font-weight:bold;
    line-height: -1rem;
    cursor: pointer;
  }

  .dropdown-content{
    width: 210px;
    height: 200px;
    background: #FFA705;
    position: absolute;
    z-index: 50;
    display: flex;
    border-radius: 0 0 0 3rem;
    flex-flow: column nowrap;
    transition: all 0.5s;
  }
</style>
