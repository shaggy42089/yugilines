import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import MainMenu from './components/pages/MainMenu.vue'
import NotFound from './components/pages/NotFound.vue'
import Lines from './components/pages/Lines.vue'
import Pool from './components/pages/Pool.vue'
import StatusBar from './components/StatusBar.vue'
import { createPinia } from 'pinia'

const routes = [
    {path: '/pool', name:'pool', component: Pool},
    {path: '/lines', name:'lines', component: Lines},
    {path: '/home', name:'menu',component: MainMenu},
    {path: '', name:'landingPage',component: StatusBar},
    {path: '/:pathMatch(.*)*', name:'notFound',component: NotFound},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
const pinia = createPinia()
createApp(App)
.use(router)
.use(pinia)
.mount('#app')
