import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        modal: {
            isOpen: config,
        }
    }),
    getters: {},
    actions: {
        showModal () {
           this.modal.isOpen.visible = true;
        },
    }
})
