import {defineStore} from "pinia";
import axios from "axios";

export const usePriceStore = defineStore({
    id: 'price',
    state: () => ({
        assets: []
    }),
    actions: {
        async getTokens() {
            await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=30&page=1&sparkline=false&locale=en').then((res) => {
               this.assets = res.data
           });
        }
    }
})
