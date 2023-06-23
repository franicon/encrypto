import {defineStore} from "pinia";
import type { tx } from "@/types";
import {transactions} from "@/app/_mock/trancs";

export const useTxStore = defineStore({
    id: 'tx',
    state: () => ({
        details: tx ,
        modal: false
    }),
    actions: {
        get_details(id: string) {
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
