<!--
props : icon e actionFunction
-->
<template>
  <v-btn x-small fab
         style="color: transparent" outlined
         @click="actionFunction()"
  >
    <icon-fy :icon=icon width="25" height="25"
             style="color: #FEB916; border-radius:3px; border: 2px solid #FEB916"
             dense
             class="mr-2"
    />
  </v-btn>
</template>

<script>
export default {
  name: "ButtonTableRowComponent",
  props: {
    actionFunction: {
      type: Function,
    },
    icon:{
      type:String,
      default:"mdi:note-edit-outline"
    }
  }
}
</script>

<style scoped>

</style>