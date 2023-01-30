import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Vuetify from "vuetify";
import { Icon } from '@iconify/vue2';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


Vue.component('sidebar-component', require('./components/SidebarComponent').default);
Vue.component('navbar-component', require('./components/NavbarComponent').default);
Vue.component('icon-fy', Icon);
Vue.component('confirmation-comp', require('./components/ConfirmationComponent.vue').default);
Vue.component('btn-edit', require('./components/ButtonComponent.vue').default);


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Toast);

new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App)
}).$mount('#app')
