<template>
  <v-row justify="center">
      <v-card class="pa-4">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    label="Nome completo"
                    required
                    :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Data de Nascimento"
                    required
                    :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="Telefone"
                    required
                    :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    label="CPF"
                    v-mask="'###.###.###.-##'"
                    required
                    :rules="[rules.required, rules.min]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="cancelButton"
          >
            Cancelar
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
  </v-row>
</template>



<script>
export default {
  name: "RegistrationComponent",
  props:{
    dialog:{
      type:Boolean,
      default:false
    },
  },
  data:()=>({
    rules: {
      required: value => !!value || 'Obrigatório.',
      min: v => v.length == 11 || 'O campo deve conter 11 dígitos',
    },
  }),
  methods:{
    cancelButton() {
      this.$emit('cancel');
    },
  }

}
</script>

<style scoped>

</style>