<template>
  <v-card class="pa-4">
    <v-card-title class="pa-0">
      <strong>  Veículos </strong>
    </v-card-title>
<v-btn @click="deleteItem">TESTE DIALOGO</v-btn>
      <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
      ></v-text-field>

      <v-data-table
          :headers="headers"
          :items="vehicles"
          :search="search"
          :loading="loadingTable"
          :footer-props="{itemsPerPageAllText: 'Todos',
          itemsPerPageText: 'Número de clientes por página'}"
      >
        <template
            v-slot:[`item.actions`]="{ item }"
            >
              <btn-edit

              ></btn-edit>

              <v-btn x-small fab style="color: transparent" outlined
                     @click="editItem(item)"
              >
                <icon-fy icon="mdi:note-edit-outline" width="25" height="25"
                      style="color: #FEB916; border-radius:3px; border: 2px solid #FEB916"
                      dense
                      class="mr-2"
                />
              </v-btn>


              <v-btn x-small fab style="color: transparent" outlined
                     @click="deleteItem(item)"
              >
                <icon-fy icon="mdi:delete-empty-outline" width="25" height="25"
                      style="color: #FEB916; border-radius:3px; border: 2px solid #FEB916"
                      dense
                      class="mr-2"
                />
              </v-btn>

              <v-btn x-small fab style="color: transparent" outlined
                     @click="detailsItem(item)"
              >
                <icon-fy icon="mdi:glasses" width="25" height="25"
                      style="color: #FEB916; border-radius:3px; border: 2px solid #FEB916"
                      dense
                      class="mr-2"
                />
              </v-btn>
        </template>
      </v-data-table>

      <confirmation-comp
          header="Excluir Veículo"
          content="Ao confirmar a operação, o veículo será excluído."
          question="Deseja confirmar a exclusão?"
          @confirm="deleteItemConfirm"
          :model=dialogDeleteVehicle
          @cancel="dialogDeleteVehicle = false"
          :buttons="2"/>

  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "VehiclesPage",
  data:()=>({
    headers:[
      {
        text: 'Veículo',
        align: 'left',
        sortable: true,
        filterable:true,
        value: '',
      },
      { text: 'Filial atual', value:''},
      { text: 'Valor da diária', value:''},
      { text: 'Responsável', value:''},
      { text: 'Ações', value:'actions'},
    ],
    search:'',
    vehicles:[],
    loadingTable: true,
    dialogDeleteVehicle: false,
  }),
  created() {
    this.initialize();
  },
  methods:{
    initialize(){
      this.getVehicles();
    },
    getVehicles(){
      axios.get('/test').then(response => {
        this.vehicles = response.data;
      }).finally(() => {
        this.loadingTable = false;
      });
    },
    editItem(i){return i},
    deleteItem(item){
      this.dialogDeleteVehicle = true;
      axios.delete('/test/' + item.id).then(response => {
        this.$toast("Veículo excluído");
        console.log(response);
      });
    },
    detailsItem(i){return i},
    deleteItemConfirm(){this.$toast("Veículo excluído");}
  }
}
</script>

<style scoped>

</style>