import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        modal: {
            ctn: null,
        }
    }),
    getters: {},
    actions: {
        showModal (ctn: boolean) {
           this.modal.ctn = ctn
        },
        closeModal () {
            console.log('it clicking')
            this.modal.ctn = null
        }
    }
})
