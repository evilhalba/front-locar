<template>
  <v-card class="pa-4">
    <btn-comp
      content="Inserir Usuário"
      :actionFunction="newUser"
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
        :items="users"
        :search="search"
        :loading="loadingTable"
        :footer-props="{itemsPerPageAllText: 'Todos',
          itemsPerPageText: 'Número de usuários por página'}"
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

    <v-dialog v-model="dialogDeleteUsers" max-width="500px">
      <confirmation-comp
          header="Excluir Veículo"
          content="Ao confirmar a operação, o veículo será excluído."
          question="Deseja confirmar a exclusão?"
          @confirm="deleteItemConfirm"
          @cancel="dialogDeleteUsers = false"
          :buttons="2"/>
    </v-dialog>

    <v-dialog v-model="dialogRegistration" persistent max-width="600px" min-width="360px">
      <registration-comp
          @cancel=" dialogRegistration = false"
      />
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersPage",
  data:()=>({
    headers:[
      {
        text: 'Nome',
        align: 'left',
        sortable: true,
        filterable:true,
        value: '',
      },
      { text: 'CPF', value:''},
      { text: 'Cargo', value:''},
    ],
    search:'',
    users:[],
    loadingTable: true,
    dialogDeleteUsers: false,
    dialogRegistration:false
  }),
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.getUsers();
    },
    getUsers(){
      axios.get('/test').then(response => {
        this.users = response.data;
      }).finally(() => {
        this.loadingTable = false;
      });
    },

    editItem(i){return i},

    deleteItem(i){
      this.dialogDeleteVehicle = true;
      axios.delete('/test/' + i.id).then(response => {
        this.$toast("Usuário excluído");
        console.log(response);
      });
    },

    detailsItem(i){return i},

    deleteItemConfirm(){this.$toast("Usuário excluído");},

    newUser(){
      this.dialogRegistration = true;
    }
  }
}
</script>

<style scoped>

</style>