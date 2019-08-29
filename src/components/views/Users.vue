<template lang='pug'>
  #users
    .users-container(v-for='user in users')
      card
        div(slot="header") {{user.username}}

</template>

<script>
export default {
  name: 'users-view',
  data () {
    return{
      users: null
    }
  },
  methods: {
    async fetchData () {
      const response = await this.axios.get('/api/v1/users')
      this.users = response.data
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style lang='scss'>

</style>
