<template>
  <v-toolbar elevation="0" color="#fff" class="d-flex justify-end pr-6">

    <v-toolbar-title style="color: #336699"
                     class="mr-4 text-h4"
    ><strong>LOCAR</strong></v-toolbar-title>
    <v-menu offset-y
            origin="center center"
            :nudge-bottom="10"
            transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon large text slot="activator"
               style="border-radius: 100%"
               v-bind="attrs"
               v-on="on"
        >
          <template>
            <v-avatar>
              <v-img src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"></v-img>
            </v-avatar>
          </template>
        </v-btn>
      </template>
      <v-list class="pa-0">
        <v-list-item ripple="ripple" rel="noopener" style="cursor: pointer">
          <v-list-item-icon class="mr-2">
            <v-icon color="#336699">mdi-account-arrow-right-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavbarComponent"
}
</script>

<style scoped>

</style>