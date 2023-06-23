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
            transactions.find((tx) => {
              if (tx.id == id) {
                  this.details = tx
                  this.modal = true
              }
            })
        }
    },
    getters: {}
})
