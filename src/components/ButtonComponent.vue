<template>
  <v-btn
      width="width" height="40px"
      style="background-color:antiquewhite; border:solid 1px #EB8712; color:#EB8712; font-size: 12px"
      @click="actionFunction"
  >
    <strong>{{content}}</strong>
  </v-btn>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    content: {
      type: String,
      default: "Insira"
    },
    actionFunction: {
      type: Function
    },
    width:{
      default: 175
    }
  }
}
</script>

<style scoped>

</style>