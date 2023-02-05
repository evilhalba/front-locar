<template>
  <v-card class="pa-4">
    <btn-comp
        content="Inserir Veículo"
        :actionFunction="newVehicle"
    />
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
          itemsPerPageText: 'Número de veículos por página'}"
      >
        <template
            v-slot:[`item.actions`]="{ item }"
            >
          <btn-edit
              :actionFunction="editItem(item)"
              icon="mdi:note-edit-outline"
          />

          <btn-edit
              :actionFunction="deleteItem(item)"
              icon="mdi:delete-empty-outline"
          />

          <btn-edit
              :actionFunction="detailsItem(item)"
              icon="mdi:glasses"
          />
        </template>
      </v-data-table>

      <v-dialog v-model="dialogDeleteVehicle" max-width="500px">
        <confirmation-comp
            header="Excluir Veículo"
            content="Ao confirmar a operação, o veículo será excluído."
            question="Deseja confirmar a exclusão?"
            @confirm="deleteItemConfirm"
            @cancel="dialogDeleteVehicle = false"
            :buttons="2"/>
      </v-dialog>

      <v-dialog v-model="dialogRegistration" persistent max-width="600px" min-width="360px">
        <vehicle-registration
            @cancel=" dialogRegistration = false"
        />
      </v-dialog>
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
    dialogRegistration:false,
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

    deleteItem(i){
      this.dialogDeleteVehicle = true;
      axios.delete('/test/' + i.id).then(response => {
        this.$toast("Veículo excluído");
        console.log(response);
      });
    },

    detailsItem(i){return i},

    deleteItemConfirm(){this.$toast("Veículo excluído");},
    newVehicle(){
      this.dialogRegistration = true;
    }
  }
}
</script>

<style scoped>

</style>