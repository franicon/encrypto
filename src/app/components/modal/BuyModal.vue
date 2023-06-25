<template>
<div class="card flex justify-content-center">
    <Dialog v-model:visible="isOpen" :closable="false" modal header="Confirm Order" class="2xl:w-[30vw] xl:w-[50vw] lg:w-[60vw] md:w-[80vw] w-[90vw]">
      <div>
        <div class="text-center py-4">
          <i class="pi pi-qrcode text-yellow-500 pb-3" style="font-size: 2rem"></i>
          <h1 class="font-[600] text-xl py-3">Confirm Order</h1>
          <p class="text-sm">You are about to make a purchase of <br> <span class="text-gray-400 font-[500] pt-2 text-sm">0.0024 BTC @ 1 BTC = 2,873,930</span></p>
        </div>
        <div class="mt-3">
          <!--DropDown Wallet-->
          <div class="mt-8">
            <p class="text-sm font-[500] pb-2">Receiving Address</p>
            <div class="card flex justify-content-center border px-3 pt-2">
              <div class="flex flex-col gap-3 w-full relative overflow-hidden">
                <div v-for="category in wallet" :key="category.key" class="flex align-items-center border-b">
                  <div class="flex justify-between w-full pb-3">
                    <div class="flex items-center">
                      <RadioButton v-model="selectedWallet" :inputId="category.key" :value="category.name"/>
                      <div class="">
                        <div class="">
                          <label :for="category.key" class="ml-2 text-sm">{{ category.name }}</label>
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
            <p class="text-sm font-[500] pb-2">Transaction Details</p>
            <div class="card flex justify-content-center pt-2">
              <div class="flex flex-col gap-3 w-full relative overflow-hidden">
                <Accordion :activeIndex="active">
                  <AccordionTab header="Show Details">
                    <p class="text-sm font-semibold text-gray-800">Total:</p>
                  </AccordionTab>
                </Accordion>
              </div>
            </div>
          </div>

          <div class="mt-8 flex justify-center">
            <button class="w-56 rounded bg-gray-700 hover:bg-gray-800 transition-all text-sm duration-500 py-4 text-gray-50 font-[500]"
                   >BUY NOW
            </button>
          </div>
        </div>
      </div>
      <ConfirmDialog></ConfirmDialog>
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

import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Accordion from 'primevue/accordion';
import RadioButton from 'primevue/radiobutton';
import AccordionTab from 'primevue/accordiontab';
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
    acceptButton: 'Yeoooo',
    accept: () => {
      visible.value = false
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
