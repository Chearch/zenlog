import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.scss'
import './assets/styles/icon.scss'
import 'tailwindcss/tailwind.css'
import mixins from '@/utils/mixins.js'
import 'github-markdown-css/github-markdown.css'
import i18n from "@/lang/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)


Vue.config.productionTip = false

Vue.mixin(mixins)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
