import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.scss'
import './assets/styles/icon.scss'
import 'tailwindcss/tailwind.css'
import mixins from '@/utils/mixins.js'
import 'github-markdown-css/github-markdown.css'

Vue.mixin(mixins)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
