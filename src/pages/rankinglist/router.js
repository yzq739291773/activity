import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/page1/home',
            name: 'home',
            component: Home
        },
        {
            path: '/page1/about',
            name: 'about',
            component: About
        },
        {
            path: '*',
            hidden: true,
            redirect: { name: 'home' }
        }
    ]
})