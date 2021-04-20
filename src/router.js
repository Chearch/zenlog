import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'page',
        redirect: '/home'
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


router.beforeEach((to,from,next)=>{
    console.log(to,from);
    if(to.path === '/admin'){
        let cookiePool = document.cookie.split(';');
        let key = "isVisit" + "=";
        let flag = false;
        for(let item of cookiePool){
            if(item.indexOf(key) === 0) flag = true;
        }
        console.log('flag:',flag);
        if(!flag){
            next('/login');
        }else{
            next();
        }
    }else{
        next();
    }
})




export default router