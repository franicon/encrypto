import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        modal: {
            ctn: null as config,
        }
    }),
    getters: {},
    actions: {
        showModal (ctn: config) {
           this.modal.ctn = ctn
        },
    }
})
