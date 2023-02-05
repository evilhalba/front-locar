<template>
  <v-container>
    <v-col cols="6">
      <date-comp/>
    </v-col>

    <v-row>
      <v-col>
        <card-dashboard
            iconify="mdi:calendar-month"
            value="97"
            message="Veículos alugados no mês"
            width="500"
        />
      </v-col>
      <v-col>
        <card-dashboard
            iconify="cil:money"
            value="R$10070,00"
            message="Valor total no mês"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "teste"
}
</script>

<style scoped>

</style>