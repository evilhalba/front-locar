<template>
  <v-app style="font-family: 'Lato', sans-serif;">
    <v-navigation-drawer
        app
        permanent
        expand-on-hover
    >
      <sidebar-component/>

    </v-navigation-drawer>

    <v-main>
      <navbar-component/>
      <v-flex >
        <v-container class="d-flex justify-content-center" fluid>
          <v-layout  >

            <router-view></router-view>

          </v-layout>
        </v-container>
      </v-flex>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
