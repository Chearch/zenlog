import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import ( /* webpackChunkName: "main" */ '@/views/main.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import ( /* webpackChunkName: "article" */ '@/views/article.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})





export default router