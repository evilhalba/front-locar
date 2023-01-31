import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Vuetify from "vuetify";
import { Icon } from '@iconify/vue2';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueTheMask from 'vue-the-mask';

Vue.component('sidebar-component', require('./components/SidebarComponent').default);
Vue.component('navbar-component', require('./components/NavbarComponent').default);
Vue.component('icon-fy', Icon);
Vue.component('confirmation-comp', require('./components/ConfirmationComponent.vue').default);
Vue.component('btn-table', require('./components/ButtonTableRowComponent.vue').default);
Vue.component('btn-comp', require('./components/ButtonComponent.vue').default);
Vue.component('registration-comp', require('./components/RegistrationComponent.vue').default);


Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Toast);
Vue.use(VueTheMask);

new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App)
}).$mount('#app')
