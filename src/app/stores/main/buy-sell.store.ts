import { defineStore } from "pinia";

export const useBuySellStore = defineStore({
    id: 'buy-sell',
    state: () => ({
        isOpen: false
    }),
    actions: {
        openModal() {
            this.isOpen = !this.isOpen
        }
    }
});
