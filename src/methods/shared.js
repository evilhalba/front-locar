import axios from "axios";
export default class shared{
    get(rota){
        axios.get(rota).then(response => {
            this.vehicles = response.data;
        }).finally(() => {
            this.loadingTable = false;
        });
    }
}