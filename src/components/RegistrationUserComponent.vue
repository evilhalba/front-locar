<template>
  <v-row justify="center">
      <v-card class="pa-4">
        <v-card-text>
          <v-container>
            <v-col cols="12" class="pr-0 pl-0">
              <v-text-field
                  label="Nome completo"
                  solo
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-row>
              <v-col cols="6">
                <v-text-field
                    label="Data de Nascimento"
                    solo
                    v-mask="'## / ## / ####'"
                    required
                    :rules="[rules.required]"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                    label="Telefone"
                    solo
                    v-mask="'(##) #####-####'"
                    required
                    :rules="[rules.required]"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col cols="12" class="pr-0 pl-0">
              <v-text-field
                  label="CPF"
                  solo
                  v-mask="'###.###.###.-##'"
                  required
                  :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col>
              <v-row>
                <v-col cols="1" class="pa-0">
                  <v-checkbox
                    v-model="checkbox"
                    class="pa-0"
                    @click="bankDataShow">
                  </v-checkbox>
                </v-col>
                <v-col class="mt-1">Sou cliente parceiro</v-col>
              </v-row>
            </v-col>
          </v-container>
        </v-card-text>

        <v-container
        v-show="associateClient">
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="Banco"
                  solo
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Agência"
                  solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-col class="pr-0 pl-0">
            <v-text-field
                label="Conta com dv"
                solo
            ></v-text-field>
          </v-col>
        </v-container>
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
  name: "RegistrationUserComponent",
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