<template lang='pug'>
  #login
    card
        div(slot="header" @keydown = 'watchKeyboard') Login
        input.login-input(slot="body" v-model="form.email" type="text" size="25rem" name="email")
        input.login-input(slot="body" v-model="form.password" type="password" size="25rem" name="password")
        button(@click="smartSubmit()" slot="body") Click me
</template>

<script>
import Card from '@/components/layout/Card'

import {LOGIN} from '@/store'

export default {
  name: 'Login',
  components: {
    Card
  },
  data() {
    return{
      form:{
        email: '',
        password: ''
      }
    }
  },
  methods: {/*
    submitForm(){
      console.log(this.form)
      const baseUri = 'http://localhost:3000/auth/login'
      this.$https.post(baseUri,this.form)
      .then(result => {
        console.log(result.tokens)
      })

    },*/
    smartSubmit() {
      let {email, password} = this.form
      this.$store.dispatch(LOGIN, {email, password})
      console.log(this.$store.getters.isAuthenticated)
    },
    watchKeyboard(event) {
      console.log(event.key)
    }
  }
}
</script>

<style lang='scss'>
  .login-input{
    margin: 1rem 0;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }
</style>
