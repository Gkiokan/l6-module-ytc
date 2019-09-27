import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import windowConfig from '~/config/window'
import i18n from '~/plugins/i18n'
import store from '~/store'
import router from './router'
import vuetify from '~/plugins/vuetify';

import './plugins'
import './components'

let vm = new Vue({
  i18n,
  store,
  router,
  vuetify,
  ...App,
})

export default vm
