<template lang='pug'>
  #app-header
    mq-layout(mq='tablet+')
      .header-container
        .logo-container
          span(class='logo big-text') OKI
          span(class='logo small-text') ZE.ME
        .nav-link-container
          .nav-link(@click="visitLink('characters')" :class="{'nav-active': isCurrentRoute('characters')}") Characters
          .nav-link(@click="visitLink('users')" :class="{'nav-active': isCurrentRoute('users')}") Users
          .nav-link(@click="visitLink('bugs')") Bugs
        .mq-header-nav(@click='toggleDropDown') &#9776;
          .dropdown-content(:style='dropDownStyle')
        .auth-container
          .logged-in(v-if="$store.getters.isAuthenticated")
            .nav-link Profile
          .logged-out(v-else)
            .nav-link(@click="visitLink('auth.login')" :class="{'nav-active': isCurrentRoute('auth.login')}") Login
    mq-layout(mq='mobile')
      .header-container
        .logo-container
          span(class='logo big-text') OKI
          span(class='logo small-text') ZE.ME 
        .mq-header-nav(@click="toggleDropDown") &#9776;
          .dropdown-content(:style='dropDownStyle')
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
        display: 'none'
      }
    }
  },
  methods: {
    visitLink(key) {
      if (key != 'bugs'){
        if(!this.isCurrentRoute(key)){
          this.$router.push({ name: `${key}`})
        }
      } else {
        window.open('https://github.com/ColinRCasto/okizeme-front-end/issues')
      }
    },
    isCurrentRoute(key) {
      return this.$route.name == key
    },
    toggleDropDown (){
      if (this.dropDownStyle.display === 'none') {
        this.dropDownStyle.display === 'flex'
      } else {
        this.dropDownStyle.display === 'none'
      }
    }
  },
}
</script>


<style lang='scss'>
  @import '@/scss/base.scss';

  .header-container{
    height: 8rem;
    width: 100vw;
    background: #FFA705;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    user-select: none;
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

  .nav-link{
    font-weight: bold;
    font-family: $oswald;
    font-size: 3rem;
    color: white;
    transition: 0.3s all;

    &:hover{
      color: black;
    }
  }

  .nav-active{
    color: black
  }

  .nav-link, .mq-header-nav{
    cursor: pointer;
  }

  .mq-header-nav{
    font-size: 5rem;
    font-weight:bold;
    line-height: -1rem;
  }
</style>
