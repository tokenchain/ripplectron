import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import VueI18n from 'vue-i18n'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import { RippleAPI } from 'ripple-lib'

const api = new RippleAPI({ server: 'wss://s1.ripple.com:443' })

Vue.prototype.$ripple = api

Vue.use(VueI18n)
Vue.use(ElementUI)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
