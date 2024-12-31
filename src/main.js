import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "@/assets/scss/app.scss"
import Breadcrumbs from './layout/breadCrumbs.vue';
import VueFeather from 'vue-feather';

createApp(App)
.use(store)
.use(router)
.component(VueFeather.name, VueFeather)
.component('Breadcrumbs', Breadcrumbs)
.mount('#app')
