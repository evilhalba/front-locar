<template>
  <v-row justify="center">
    <v-card class="pa-4">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Marca"
                  solo
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Modelo"
                  solo
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Ano"
                  solo
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Kilometragem"
                  solo
                  suffix="Km"
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Potência"
                  solo
                  suffix="CV"
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Renavam"
                  solo
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col>
            <v-row >
              <v-col cols="6" class="pl-0">
                <v-currency-field
                    label="Valor da diária"
                    solo
                    prefix="R$"
                    required
                    :rules="[rules.required]"
                ></v-currency-field>
              </v-col>
              <v-col cols="6" class="pr-0">
                <v-select
                    label="Filial de origem"
                    solo
                    required
                    :rules="[rules.required]"
                ></v-select>
              </v-col>
            </v-row>
          </v-col>
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
  name: "RegistrationVehicleComponent",
  props:{
    dialog:{
      type:Boolean,
      default:false
    },
  },
  data:()=>({
    rules: {
      required: value => !!value || 'Obrigatório.',
    },
    checkbox:false,
    associateClient:false
  }),
  methods:{
    cancelButton() {
      this.$emit('cancel');
    },
    bankDataShow(){
      if(this.checkbox){
        this.associateClient = true;
      }else{
        this.associateClient = false;
      }
    }

  }

}
</script>

<style scoped>

</style>