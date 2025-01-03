import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Bootstrap CSS and JS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Custom SCSS
import "@/assets/scss/app.scss";

// Components
import Breadcrumbs from './layout/breadCrumbs.vue';
import VueFeather from 'vue-feather';

// Create and mount the app
createApp(App)
  .use(store) // Use Vuex store
  .use(router) // Use Vue Router
  .component(VueFeather.name, VueFeather) // Register VueFeather globally
  .component('Breadcrumbs', Breadcrumbs) // Register Breadcrumbs globally
  .mount('#app'); // Mount the app to #app