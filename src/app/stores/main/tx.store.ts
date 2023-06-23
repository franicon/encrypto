import {defineStore} from "pinia";

export const useTxStore = defineStore({
    id: 'tx',
    state: () => ({
        tx_details: Boolean,
        modal: false
    }),
    actions: {},
    getters: {}
})
