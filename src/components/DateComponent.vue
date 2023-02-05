<template>
  <v-card
      height="42px"
      class="pt-2 pb-2 pr-3 pl-3 white--text d-flex justify-center"
      style="background-color: #032F55; font-size: 18px;"
  >
    {{todayFormat}}
  </v-card>
</template>

<script>
export default {
  name: "DateComponent",
  data:()=> ({
    todayFormat:'',
  }),
  created() {
    this.initialize();
  },
  methods: {
    formatDate(){
      const date = new Date();
      const month = date.toLocaleString('pt',{month: 'long'});
      const weekday = date.toLocaleString('pt',{weekday: 'long'});
      const day = date.getDate();
      const year = date.getFullYear();
      const dayFormat = weekday[0].toUpperCase() + weekday.substring(1,weekday.length) + ", " + day + " de " + month+ " de " + year;
      this.todayFormat = dayFormat;
      console.log("teste de data"+this.todayFormat);
      console.log("testado?")
    },

    initialize(){
      this.formatDate();
    },

  }
}
</script>

<style scoped>

</style>
