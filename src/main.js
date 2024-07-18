import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import MainMenu from './components/pages/MainMenu.vue'
import NotFound from './components/pages/NotFound.vue'
import Lines from './components/pages/Lines.vue'
import Decks from './components/pages/Decks.vue'
import StatusBar from './components/StatusBar.vue'
import CardDetails from './components/pages/CardDetails.vue'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { 
    FaRegularTrashAlt, 
    HiSolidPlusCircle,
    HiSolidMinusCircle,
    BiCircleFill,
    GiCardDraw,
    MdClose,
} from "oh-vue-icons/icons";
import { createPinia } from 'pinia'

addIcons(
    FaRegularTrashAlt,
    HiSolidPlusCircle,
    HiSolidMinusCircle,
    BiCircleFill,
    GiCardDraw,
    MdClose,
);

const routes = [
    { path: '/decks', name: 'decks', component: Decks },
    { path: '/lines', name: 'lines', component: Lines },
    { path: '/home', name: 'menu', component: MainMenu },
    { path: '/cardDetails/:id', name: 'cardDetails', component: CardDetails, props: true},
    { path: '', name: 'landingPage', component: StatusBar },
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const toastOptions = {
    timeout: 3000
};

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .use(Toast, toastOptions)
    .component("v-icon", OhVueIcon)
    .mount('#app')
