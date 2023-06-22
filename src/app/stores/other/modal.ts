import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        modal: {
            ctn: null as boolean,
        }
    }),
    getters: {},
    actions: {
        showModal (payload: boolean) {
           this.$state.modal.ctn = payload
        }
    }
})
