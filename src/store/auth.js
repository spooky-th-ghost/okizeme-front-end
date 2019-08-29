import Vue from 'vue'

import {
  LOGIN,
  LOGIN_ROUTINE
} from './types'

function initialState() {
  return {
    token: null,
    exp: null,
    email: null,
    username: null,
    isLoggedin: !!localStorage.getItem('auth_token'),
    pending: false
  }
}


export default {
  state: initialState(),
  mutations: {
    [LOGIN]: (state, { token, exp, username, email}) => {
      state.token = token
      state.exp = exp
      state.username = username
      state.email = email
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
  },
  actions: {
    [LOGIN_ROUTINE]: async ({commit}, { token, exp, username, email}) => {
      localStorage.setItem('auth_token', token)
      commit(LOGIN,{ token, exp, username, email})
      console.log(`User ${username} has successfully logged in!`)
    },
    [LOGIN]: async ({dispatch}, { email, password }) => {
      let response = await Vue.axios.post('/auth/login',{ email, password })
      let {token, exp, username} = response.data

      if (token){
        dispatch(LOGIN_ROUTINE, {token,exp,username,email})
        return true
      }
    }
  }
}
