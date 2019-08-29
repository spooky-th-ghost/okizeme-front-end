import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Accept': 'application/json; version=1.0',
    'Content-Type': 'application/json'
  }
})

Vue.use(VueAxios, api)

export default api
