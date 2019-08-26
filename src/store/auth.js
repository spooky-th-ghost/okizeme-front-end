//import Vue from 'vue'
import axios from 'axios'
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
      console.log(state)
    }
  },
  getters: {
    isAuthenticated: state => !!state.token
  },
  actions: {
    [LOGIN_ROUTINE]: async ({commit}, { token, exp, username, email}) => {
      localStorage.setItem('auth_token', token)
      commit(LOGIN,{ token, exp, username, email})
    },
    [LOGIN]: async ({dispatch}, { email, password }) => {
      let response = await axios.post('http://localhost:3000/auth/login',{ email, password })
      let {token, exp, username} = response.data

      if (token){
        dispatch(LOGIN_ROUTINE, {token,exp,username,email})
      }
    }
  }
}
