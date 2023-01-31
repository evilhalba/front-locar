<template>
  <v-btn
      width="175px" height="40px"
      style="background-color:antiquewhite; border:solid 1px #EB8712; color:#EB8712;"
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
    }
  }
}
</script>

<style scoped>

</style>