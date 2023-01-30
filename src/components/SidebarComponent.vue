<template>
    <v-card
        height="inherit"
        class="mx-auto"

    >
      <v-navigation-drawer permanent floating  expand-on-hover
                           color="#032f55"
                           :mini-variant.sync="mini"
                           v-model="drawer"
                           @click.stop="mini = !mini"
                           style="background-color: #336699"


      >

            <v-list
                nav
                dense
            >

              <v-list-item
                  active-class="border"
                  class="mb-3 white--text"
                  @click="dashboardPage()">
                <v-list-item-icon>
                  <v-icon color="#ffffff">mdi-view-dashboard-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1">Dashboard</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                  active-class="border"
                  class="mb-3 white--text"
                  @click="vehiclesPage()">
                <v-list-item-icon>
                  <v-icon color="#ffffff">mdi-car</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1">Veículos</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                  active-class="border"
                  class="mb-3 white--text"
                  @click="usersPage">
                <v-list-item-icon>
                  <v-icon color="#ffffff">mdi-account-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1">Usuários</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                  active-class="border"
                  class="mb-3 white--text"
                  @click="branchesPage">
                <v-list-item-icon>
                  <v-icon color="#ffffff">mdi-domain</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1">Filiais</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                  active-class="border"
                  class="mb-3 white--text"
                  @click="bookingPage">
                <v-list-item-icon>
                  <v-icon color="#ffffff">mdi-ticket-confirmation-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="subtitle-1">Reservas</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
      </v-navigation-drawer>

    </v-card>
</template>

<script>

export default {
  name: "SidebarComponent",

  data:()=> ({
      drawer: true,
      mini: true,
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize(){

    },
    dashboardPage() {
      this.$router.push({ name: 'DashboardPage', params: {}})
    },
    vehiclesPage() {
      this.$router.push({ name: 'VehiclesPage', params: {}})
    },
    bookingPage(){
      this.$router.push({ name: 'BookingPage', params: {}})
    },
    branchesPage(){
      this.$router.push({ name: 'BranchesPage', params: {}})
    },
    usersPage(){
      this.$router.push({ name: 'UsersPage', params: {}})
    }
  },

}
</script>

<style scoped>

</style>