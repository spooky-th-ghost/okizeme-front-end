import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import visual from './visual'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth,
    visual
  }
})

export default store
export * from './types'
