<template>
<div class="card flex justify-content-center">
    <Dialog v-model:visible="isOpen" :closable="false" modal header="Confirm Order" class="2xl:w-[20vw] xl:w-[50vw] lg:w-[60vw] md:w-[80vw] w-[90vw]">
      <div>
        <div class="text-center py-2">
          <i class="pi pi-qrcode text-gray-500" style="font-size: 1.5rem"></i>
          <h1 class="font-[600] text-xl pb-1 text-gray-500">Confirm Order</h1>
          <p class="text-sm text-gray-400">You are about to make a purchase of <br> <span class="text-gray-400 font-[500] pt-2 text-sm">0.0024 BTC @ 1 BTC = 2,873,930</span></p>
        </div>
        <div class="mt-3">
          <!--DropDown Wallet-->
          <div class="mt-8">
            <p class="text-sm font-[500] pb-2">Receiving Address</p>
            <div class="card flex justify-content-center border border-gray-400 border-dashed rounded px-3 py-2">
              <div class="flex flex-col gap-3 w-full relative overflow-hidden">
                <div v-for="category in wallet" :key="category.name" class="flex align-items-center border-b">
                  <div class="flex justify-between w-full pb-3">
                    <div class="flex items-center">
                      <RadioButton v-model="selectedWallet" :inputId="category.name" :value="category.name"/>
                      <div class="">
                        <div class="">
                          <label :for="category.name" class="ml-2 text-sm">{{ category.name }}</label>
                          <p class="ml-2 text-xs">{{category.address}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="absolute bottom-[3px] left-7 w-full"  v-if="selectedWallet === 'Others'">
                  <InputText  v-model="value" class="p-inputtext-sm w-[93%] address-input" placeholder="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <p class="text-sm font-[500] text-gray-500 mb-2 pb-1 border-b border-dashed border-gray-400">Transaction Details</p>
            <div class="space-y-2">
              <div class=" flex justify-between items-center">
                <p class="text-gray-400 font-[500] text-xs">Token-amount:</p>
                <p class="text-gray-500 font-[600] text-[11px]">2000 NGN</p>
              </div>
              <div class=" flex justify-between items-center">
                <p class="text-gray-400 font-[500] text-xs">Transaction-fee:</p>
                <p class="text-gray-500 font-[600] text-[11px]">0.40 NGN</p>
              </div>
              <div class=" flex justify-between items-center">
                <p class="text-gray-400 font-[500] text-xs">Network-fee:</p>
                <p class="text-gray-500 font-[600] text-[11px]">0.50 NGN</p>
              </div>
              <div class=" flex justify-between items-center border-t pt-1">
                <p class="text-gray-700 font-[500] text-xs">Total-fee:</p>
                <p class="text-gray-700 font-[600] text-[11px]">2030.00 NGN</p>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center">
            <button class="w-40 rounded bg-gray-700 hover:bg-gray-800 transition-all text-xs duration-500 py-3 text-gray-50 font-[500]"
                   >BUY NOW
            </button>
          </div>
        </div>
      </div>
      <ConfirmDialog>
        <Toast />
      </ConfirmDialog>
      <template #header>
        <div class="flex justify-end w-full"><Button icon="pi pi-times"  text @click="confirm1()"/></div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useBuySellStore } from "@/app/stores/main/buy-sell.store";

import Toast from 'primevue/toast';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';
import ConfirmDialog from 'primevue/confirmdialog';

import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";


const store = useBuySellStore();
const { isOpen } = storeToRefs(store);

const toast = useToast();
const confirm = useConfirm();

const confirm1 = () => {
  confirm.require({
    message: 'Are you sure you want to cancel?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    acceptIcon: 'pi pi-check',
    rejectIcon: 'pi pi-times',
    accept: () => {
     store.openModal()
      toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });

    },
    reject: () => {
      toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
  });
};

const wallet = ref([
  { name: 'Bitcoin', address: 'bc1qxy2kgdygjrs-------493p83kkfjhx0wlh', img: 'btc.svg'},
  { name: 'Others', address: '', img: 'btc.svg'},
]);

const active = ref(0);
const selectedWallet = ref('Bitcoin');
</script>

<style scoped>
.address-input {
  border: 0 !important;
  font-size: small;
}
</style>
