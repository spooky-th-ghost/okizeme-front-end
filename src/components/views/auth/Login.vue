<template lang='pug'>
  #login
    card.login-card
        div(slot="header") Login
        input.login-input(slot="body" v-model="form.email" type="text" size="25rem" name="email")
        input.login-input(slot="body" v-model="form.password" type="password" size="25rem" name="password")
        button(@click="submitForm" slot="body") Login
</template>

<script>
import FormMixin from '@/components/mixins/FormMixin'

import {LOGIN} from '@/store'

export default {
  name: 'Login',
  mixins: [
    FormMixin
  ],
  data() {
    return{
      form:{
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submitForm () {
      let {email, password} = this.form
      let value = await this.$store.dispatch(LOGIN, {email, password})
      console.log(value)
    }
  }
}
</script>

<style lang='scss'>

  #login{
    height: 90vh;
    width: 100vw;
    text-align: center;
  }

  .login-card{
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -20rem;
  }
  .login-input{
    margin: 1rem 0;
    font-size: 2rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }
</style>
