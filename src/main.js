import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import MainMenu from './components/pages/MainMenu.vue'
import NotFound from './components/pages/NotFound.vue'
import Lines from './components/pages/Lines.vue'
import Pool from './components/pages/Pool.vue'

const routes = [
    {path: '/pool', name="pool", component: Pool},
    {path: '/lines', component: Lines},
    {path: '/home', component: MainMenu},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

createApp(App)
.use(router)
.mount('#app')
