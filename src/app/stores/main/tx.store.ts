import {defineStore} from "pinia";
import {transactions} from "@/app/_mock/trancs";

export const useTxStore = defineStore({
    id: 'tx',
    state: () => ({
        details: null,
        modal: false
    }),
    actions: {
        get_details(id) {
            this.details = transactions.find((tx) => {
                console.log(tx)
                this.modal = true
                return tx.id = id
            })
        }
    },
    getters: {}
})
