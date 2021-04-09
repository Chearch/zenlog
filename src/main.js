import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/global.scss'
import './assets/styles/icon.scss'
import 'tailwindcss/tailwind.css'
import mixins from '@/utils/mixins.js'

Vue.mixin(mixins)
Vue.config.productionTip = false
Vue.filter('fmtTime',v=>{
  if(!v) return ''
  console.log(v);
  let [year,month,day] = v.split('/');
  month.length !== 2 ?month = '0'+month:null;
  day.length !==2 ? day = '0'+day:null;
  return `${year}/${month}/${day}`;
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
