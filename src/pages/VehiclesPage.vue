<template>
  <v-card class="pa-4">
    <v-row>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Combustível"
            :actionFunction="newFuel"
        />
      </v-col>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Modelo"
            :actionFunction="newModel"
        />
      </v-col>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Cores"
            :actionFunction="newColor"
        />
      </v-col>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Versões"
            :actionFunction="newVersion"
        />
      </v-col>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Grupos"
            :actionFunction="newGroups"
        />
      </v-col>
      <v-col class="pa-0">
        <btn-comp
            content="Cadastrar Veículo"
            :actionFunction="newVehicle"
        />
      </v-col>
    </v-row>

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

      <v-dialog v-model="dialogFuel" width="40%">
          <vehicle-composer
              @cancel=" dialogFuel = false"
              label = "Insira o tipo de combustível"
              v-bind:items = "fuel"
              :model = "fuelModel"
              route="fuelTypes"

          />
      </v-dialog>

      <v-dialog v-model="dialogModel" width="40%">
        <vehicle-composer
            @cancel=" dialogModel = false"
            label = "Insira o modelo"
            :items = "model"
            v-model="modelModel"
        />
      </v-dialog>

      <v-dialog v-model="dialogColor" width="40%">
        <vehicle-composer
            @cancel=" dialogColor = false"
            label = "Insira a cor"
            :items = "color"
            :model = "colorModel"
        />
      </v-dialog>
      <v-dialog v-model="dialogGroups" width="40%">
        <vehicle-composer
            @cancel=" dialogGroups = false"
            label = "Insira o grupo"
            :items = "groups"
            :model = "groupsModel"
        />
      </v-dialog>
    <v-dialog v-model="dialogVersion" width="40%">
      <vehicle-composer
          @cancel=" dialogVersion = false"
          label = "Insira a versão"
          :items = "version"
          :model = "versionModel"
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
    dialogFuel:false,
    dialogModel:false,
    dialogColor:false,
    dialogGroups:false,
    dialogVersion:false,
    fuel:[],
    model:[],
    color:[],
    groups:[],
    version:[],
    fuelModel:'',
    modelModel:'',
    colorModel:'',
    groupsModel:'',
    versionModel:'',
    fuelRoute:''
  }),
  created() {
    this.initialize();
  },
  methods:{
    initialize(){
      this.fuelRoute = "fuelTypes";

      // list fuel
      axios.get('https://automobiles-manager.eduardov.dev.br/api/fuelTypes').then(response=>{
        this.fuel = response.data;
        console.log("fuel:", response.data)
      }).finally(() => {
        this.loadingTable = false;
      });

      // list model
      axios.get('https://automobiles-manager.eduardov.dev.br/api/modelTypes').then(response=>{
        this.model = response.data;
      }).finally(() => {
        this.loadingTable = false;
      });

      // list color
      axios.get('https://automobiles-manager.eduardov.dev.br/api/colorTypes').then(response=>{
        this.color = response.data;
      }).finally(() => {
        this.loadingTable = false;
      });

      // list groups
      axios.get('https://automobiles-manager.eduardov.dev.br/api/automobilesGroup').then(response=>{
        this.groups = response.data;
      }).finally(() => {
        this.loadingTable = false;
      });

      // list version
      // axios.get('https://automobiles-manager.eduardov.dev.br/api/modelVersions').then(response=>{
      //   this.version = response.data;
      // }).finally(() => {
      //   this.loadingTable = false;
      // });
    },

    editItem(i){return i},


    deleteItem(item, route){
      //this.dialogDeleteVehicle = true;
      axios.delete(`/automobiles-manager.eduardov.dev.br/api/${route}/`+ item).then(response => {
        this.$toast("Item excluído!");
        console.log(response);
      });
    },

    detailsItem(i){return i},

    deleteItemConfirm(){this.$toast("Veículo excluído");},
    newVehicle(){
      this.dialogRegistration = true;
    },
    newFuel(){
      this.dialogFuel = true;
    },
    newModel(){
      this.dialogModel = true;
    },
    newColor(){
      this.dialogColor = true;
    },
    newGroups(){
      this.dialogGroups = true;
    },
    newVersion(){
      this.dialogVersion = true;
    }
  }
}
</script>

<style scoped>

</style>