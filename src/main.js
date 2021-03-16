import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/global.scss'
import './assets/styles/icon.scss'
import mixins from '@/utils/mixins.js'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)
        


Vue.use(ElementUI);
Vue.mixin(mixins)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
