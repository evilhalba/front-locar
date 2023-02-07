import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Vuetify from "vuetify";
import { Icon } from '@iconify/vue2';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueTheMask from 'vue-the-mask';
import VCurrencyField from 'v-currency-field';



Vue.component('sidebar-component', require('./components/SidebarComponent').default);
Vue.component('navbar-component', require('./components/NavbarComponent').default);
Vue.component('icon-fy', Icon);
Vue.component('confirmation-comp', require('./components/ConfirmationComponent.vue').default);
Vue.component('btn-table', require('./components/ButtonTableRowComponent.vue').default);
Vue.component('btn-comp', require('./components/ButtonComponent.vue').default);
Vue.component('user-registration', require('./components/RegistrationUserComponent.vue').default);
Vue.component('vehicle-registration', require('./components/RegistrationVehicleComponent.vue').default);
Vue.component('card-dashboard', require('./components/DashboardCardComponent.vue').default);
Vue.component('date-comp', require('./components/DateComponent.vue').default);
Vue.component('vehicle-composer', require('./components/VehiclesComposerDialog.vue').default);



Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Toast);
Vue.use(VueTheMask);
Vue.use(VCurrencyField, {
  locale: 'pt-BR',
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: 0,
  valueAsInteger: false,
  allowNegative: true
})



new Vue({
  vuetify: new Vuetify(),
  router,
  render: h => h(App)
}).$mount('#app')
