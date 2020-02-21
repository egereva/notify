import Vue from 'vue'
import Vuex from 'vuex'

import axios from "axios";

import notify from './notify'
import preloader from './preloader'
import error from './error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notify,
    preloader,
    error
  },
  actions: {
    setMessages ({commit}) {
      axios
        .get('https://tocode.ru/static/c/vue-pro/notifyApi.php')
        .then(response => {
          let res =  response.data.notify
          commit('setMessages', res)
        })
        .catch(error => {
          console.log(error)
          let mes = 'Network error'
          commit('setError', mes)
        })
        .finally( () => {
          commit('setPreload', false)
        })
    },
  }
})
