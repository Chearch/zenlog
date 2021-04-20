import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'page',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: ()=> import (/*webpackChunkName: "page" */ '@/views/index.vue')
    },
    {
        path: '/article',
        name: 'article',
        component: () => import ( /* webpackChunkName: "article" */ '@/components/article/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ( /* webpackChunkName: "article" */ '@/views/login.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import ( /* webpackChunkName: "article" */ '@/views/admin.vue')
    },
    
]



const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})


// router.beforeEach((to,from,next)=>{
//     console.log();
// })




export default router