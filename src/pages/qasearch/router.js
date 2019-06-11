import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            redirect: '/qasearch/home'
        }, {
            path: '/qasearch/home',
            name: 'home',
            component: Home
        },
        {
            path: '/qasearch/about',
            name: 'about',
            component: About
        }
    ]
})