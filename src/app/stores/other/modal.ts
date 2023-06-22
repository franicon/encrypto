import config from "@/@config";
import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: 'modal',
    state: () => ({
        collapseBar: config.visible,
    }),
    getters: {},
    actions: {
        setVisible (payload: any) {
           this.collapseBar = payload
        }
    }
})
