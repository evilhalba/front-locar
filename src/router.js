import Vue from "vue";
import Router from "vue-router";

//pages
import VehiclesPage from "@/pages/VehiclesPage.vue";
import UsersPage from "@/pages/UsersPage.vue";
import DashboardPage from "@/pages/DashboardPage.vue";
import BookingPage from "@/pages/BookingPage.vue";
import BranchesPage from "@/pages/BranchesPage.vue";

Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name: 'DashboardPage',
            component : DashboardPage
        },
        {
            path:'/vehicles',
            name: 'VehiclesPage',
            component : VehiclesPage
        },
        {
            path:'/users',
            name: 'UsersPage',
            component : UsersPage
        },
        {
            path:'/booking',
            name: 'BookingPage',
            component : BookingPage
        },
        {
            path:'/branches',
            name: 'BranchesPage',
            component : BranchesPage
        },

    ]
})