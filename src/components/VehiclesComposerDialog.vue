<template>
  <v-card class="pa-5 transition-swing">
    <v-row>
      <v-col>
        <v-text-field
            :label= "label"
            :v-model="model"
            style="color:deeppink;border-radius: 25px;"
            @keydown.enter.prevent="saveButton"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-card-actions>
          <btn-comp
              content="Inserir"
              :actionFunction="saveButton"/>
        </v-card-actions>
      </v-col>
    </v-row>

    <v-data-table
        :headers="headersComp"
        :items="items"
        :footer-props="{
                  itemsPerPageAllText: 'Todos',
                  itemsPerPageText: 'Por página'
                  }"

    >

      <template
          v-slot:[`item.actions`]="{item}" >
        <v-btn x-small fab class="ma-2 white--text" color= "blue"
               @click="deleteButton(item.id)"
        >
          <v-icon>mdi-delete-circle-outline</v-icon>
        </v-btn>
      </template>

    </v-data-table>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "VehiclesComposerDialog",
  props:{
    headersComp:{
      default:[{ text:'Nome', align:'start', value:'name'},{ text:'Ações', align:'start', value:'actions'}]
    },
    items:{

    },
    label:{
      type:String,
      default: "Digite"
    },
    model:{
      type:String,
      default:"teste"
    },
    route:{
      type:String,
      default:''
    },
    item:{
      type:String,
      default:''
    }
  },
  data:()=>({
    fuelModelFuncione:''
  }),
  methods: {
    initialize(){
      // list fuel
      // axios.get('https://automobiles-manager.eduardov.dev.br/api/fuelTypes').then(response=>{
      //   this.items = response.data;
      //   console.log("fuel:", response.data)
      // }).finally(() => {
      //   this.loadingTable = false;
      // });
    },

    saveButton() {
      axios.post(`https://automobiles-manager.eduardov.dev.br/api/${this.route}/`).then(response => {
        this.$toast("Item adicionado!");
        console.log(response.data);
      })
      //this.$emit('save');
    },
    deleteButton(item) {
      axios.delete(`https://automobiles-manager.eduardov.dev.br/api/${this.route}/`+ item).then(response => {
        this.$toast("Item excluído!");
        console.log(response.data);
      })
    },
  }
}
</script>

<style scoped>

</style>