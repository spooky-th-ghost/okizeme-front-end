<template lang="pug">
  #app
    app-header
    login   
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Login from '@/components/views/Login'
import Card from '@/components/layout/Card'

export default {
  components: {
    AppHeader,
    Card,
    Login
    },
    methods: {
      fetchUser() {
        const baseUri = 'http://localhost:3000/api/v1/users/MereCasto'
        this.$https.get(baseUri)
        .then((result) => {
          console.log(result.data)
        })
      }
    },
    mounted(){
      //this.fetchUser()
    }
}
</script>

<style lang="scss">
  @import '@/scss/base.scss';

  html {
    font-size: 10px;
  }

  .big-logo{
    font-weight: bold;
    word-wrap: break-word;
    color: white;
    font-size: 4rem;
    text-shadow: black -0.14rem 0.14rem;
    width: 10rem;
    height: 10.5rem;
    background: rgb(255, 167, 5);
  }
</style>
