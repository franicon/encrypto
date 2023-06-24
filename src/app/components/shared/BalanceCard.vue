<template>
  <article class="w-full">
<!--    <div class="text-gray-500 md:text-xl text-xl md:font-semibold font-[400]"><i class="pi pi-wallet"></i><span class="pl-2">Wallet Balance</span></div>-->
    <div class="lg:mt-3  px-4 xl:py-5 py-3 bg-gray-900 rounded flex justify-between items-center">
      <div>
        <p class="text-gray-200 font-[400] text-xs">Total Balance</p>
        <div class="flex items-center">
          <div class="text-gray-100 font-semibold text-[30px]">{{ selectedAsset.fiat }}</div>
          <Dropdown v-model="selectedAsset" :options="assets" optionLabel="currency"></Dropdown>
        </div>
        <i class="pi pi-sort-alt text-gray-300 icon-size"></i>
        <p class="font-semibold text-sm"><span class="text-gray-400">{{selectedAsset.token}}</span> <small class="text-gray-500">{{selectedAsset.code}}</small></p>
      </div>
      <i class="pi pi-wallet text-gray-800" style="font-size: 7rem"></i>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

const assets = ref([
  { fiat:'6.4', token: '000.003', name: 'bitcoin', code: 'BTC', currency: 'USD', currency_amt: '760.03' },
  { fiat:'5216', token: '000.003', name: 'bitcoin', code: 'BNB', currency: 'NGN',  currency_amt: '760.03'},
  { fiat:'5.1', token: '000.003', name: 'bitcoin', code: 'CEL', currency: 'EUR', currency_amt: '760.03' },
  { fiat:'7.35', token: '000.003', name: 'bitcoin', code: 'SOL', currency: 'CAD', currency_amt: '760.03' },
  { fiat:'20.2', token: '000.003', name: 'bitcoin', code: 'COD', currency: 'AUD', currency_amt: '760.03' },
]);

const selectedAsset = ref(assets.value[1]);

</script>

<style scoped lang="css">
:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item ){
  font-size:12px !important;
}

:deep(.p-dropdown) {
  box-shadow: none;
  background-color: transparent;
  border:0;
  padding: 0;
  color:#fff !important;
}
:deep(.p-dropdown) {
  box-shadow: none !important;
  outline: none;
  border:0;
  color:#fff !important;
}
 .p-dropdown-item{
  padding: 3px 13px !important;
   margin: 10px !important;
   font-size: 10px !important;
}
:deep(.p-dropdown-trigger) {
  /*display: none;*/
  padding: 0 !important;
  justify-content: flex-start !important;
  width:10px !important;
  color: #d1d1d1 !important;
}
:deep(.p-dropdown-label) {
  font-size: 13px !important;
  padding-right: 5px !important;
  color: #d1d1d1;
}

p-dropdown-label p-inputtext{
  display: none;
}
:deep(.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight) {
  color: #121b25 !important;
  background: rgba(18, 27, 37, 0.22) !important;
}
:deep(.icon-size) {
  font-size: 12px !important;
}

</style>
