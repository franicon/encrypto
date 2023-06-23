import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        modal: {
            ctn: config,
        }
    }),
    getters: {},
    actions: {
        showModal (ctn: boolean) {
           this.modal.ctn.visible = ctn
        },
        closeModal () {
            console.log('it clicking')
            this.modal.ctn.visible = null
        }
    }
})
