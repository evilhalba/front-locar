<v-dialog v-model="model" max-width="500px">
  <template v-slot:[`hover.default`]="{hover}">
    <v-card max-width="640px"
            class="text-center rounded-lg roboto"
            :class="`elevation-${hover ? 24 : 6}`"
    >
      <v-card-title
          class="d-flex justify-center white--text pa-2 roboto font-weight-bolder"
          style="background-color:deeppink; max-height: 60px"
      >
        {{header}}</v-card-title>
      <v-card-text style="font-size:17px;"
                   class="black--text pa-3">
        <v-col class="font-weight-bolder">{{ content }}</v-col>
        <v-col class="mb-8">{{question}}</v-col>
        <v-card-actions>
          <v-row>
            <v-col v-if="isVisible">
              <v-btn
                  width="175px" height="40px"
                  style="background-color:deeppink;"
                  class="white--text"
                  @click="cancelButton"
              >
                <strong>Cancelar</strong></v-btn>
            </v-col>
            <v-col>
              <v-btn v-if="isVisible"
                     width="175px" height="40px"
                     style="background-color: deeppink;"
                     class="white--text"
                     @click="confirmButton"
              >Confirmar</v-btn>

              <v-btn v-else
                     width="175px" height="40px"
                     style="background-color: #033254;"
                     class="white--text"
                     @click="confirmButton"
              >Confirmar</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </template>
</v-dialog>
  <script>
    export default {
      //Recebe 4 props
      name: "ConfirmationComponent",
      props:{
        model:{
          type:Boolean,
          default:false
        },
        header:{
          type:String,
          default: "Cancelar Operação"
        },
        content:{
          type: String,
          default: "Ao cancelar a operação, as ações já realizadas não serão salvas."
        },
        question:{
          type:String,
          default:"Deseja confirmar o cancelamento?"
        },
        buttons:{
          type: Number,
          default:1
        },
      },
      created() {
        this.initialize();
      },
      computed: {
        // modifica a quantidade de botões no componente.
        isVisible() {
          return this.buttons == 2;
        },
      },
      methods: {
        confirmButton() {
          this.$emit('confirm');
        },

        cancelButton() {
          this.$emit('cancel');
        },



        initialize(){
          // this.buttonMethod();
        },
      }
    }
  </script>

  <style scoped>
    .roboto{font-family: 'Roboto'}

  </style>



