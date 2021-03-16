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
        component: () =>
            import ( /* webpackChunkName: "main" */ '@/views/main.vue')
    },
    {
        path: '/link',
        name: 'link',
        component: () =>
            import ( /* webpackChunkName: "link" */ '@/views/link.vue')
    },
    {
        path: '/like',
        name: 'like',
        component: () =>
            import ( /* webpackChunkName: "tool" */ '@/views/like.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})





export default router