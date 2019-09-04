import Vue from 'vue'
import VueMq from 'vue-mq'

import App from './App.vue'
import router from './router'
import store from './store'
import './utils/api'



// Global components
import Card from '@/components/global/Card'
import NavLink from '@/components/global/NavLink'

Vue.component('card', Card)
Vue.component('nav-link', NavLink)

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    mobile:450,
    tablet: 900,
    laptop: 1250,
    desktop: Infinity
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
