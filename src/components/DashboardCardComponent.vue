<!--
    Custom props: icon, iconify, value, message, width
  -->
<template>
  <v-card
      v-bind="$attrs"
      :width="width"
      elevation="2"
  >
    <v-row
        justify="center"
        class="flex-column"
    >
      <v-col
          class="d-flex justify-center"
      >
        <div v-if="icon && !iconify">
          <v-icon
              class="rounded-circle p-4"
              style="background-color: #D9D9D9"
              :large="$vuetify.breakpoint.mdAndUp"
          >
            {{ icon }}
          </v-icon>
        </div>
        <div
            class="rounded-circle m-auto"
            style="width: fit-content; background-color: #dffff4"
            v-if="!icon && iconify"
        >
          <icon-fy
              class="p-4"
              :width="$vuetify.breakpoint.mdAndUp ? 84 : 72"
              :height="$vuetify.breakpoint.mdAndUp ? 84 : 72"
              :icon="iconify"
          />
        </div>
      </v-col>
      <v-col
          class="py-0"
      >
        <h3
            :class="$vuetify.breakpoint.mdAndUp ? 'h2' : 'h4'"
            class="text-center font-weight-bold m-0 text-h3"
            style="color:#00fa9a;"
        >
          {{ value }}
        </h3>
      </v-col>
      <v-col
          class="pt-0"
      >
        <h6
            :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2'"
            class="text-center font-weight-medium m-0"
        >
          {{ message }}
        </h6>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "DashboardCardComponent",
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconify: {
      type: String,
      default: ''
    },
    value: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: 'Frase que pode ser mudada'
    },
    width: {
      default: '285'
    }
  }
}
</script>

<style scoped>

</style>
