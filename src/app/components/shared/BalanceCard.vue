<template>
  <article class="w-full">
<!--    <div class="text-gray-500 md:text-xl text-xl md:font-semibold font-[400]"><i class="pi pi-wallet"></i><span class="pl-2">Wallet Balance</span></div>-->
    <div class="lg:mt-3  px-4 xl:py-5 py-3 bg-gray-900 rounded flex justify-between items-center">
      <div>
        <p class="text-gray-200 font-[400] text-xs">Total Balance</p>
        <div class="flex items-center">
          <div class="text-gray-100 font-semibold text-[30px]">{{ selectedAsset.fiat.toLocaleString() }}</div>
          <Dropdown v-model="selectedAsset" :options="assets" optionLabel="currency"></Dropdown>
        </div>
        <i class="pi pi-sort-alt text-gray-300 icon-size"></i>
        <p class="font-semibold text-sm"><span class="text-gray-400">{{selectedAsset.token}}</span> <small class="text-gray-500">{{selectedAsset.code}}</small></p>
      </div>
      <i class="pi pi-wallet text-gray-800" style="font-size: 9rem"></i>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

const assets = ref([
  { fiat:'1000', token: '000.003', name: 'bitcoin', code: 'BTC', currency: 'USD', currency_amt: '760.03' },
  { fiat:'5216', token: '000.003', name: 'bitcoin', code: 'BNB', currency: 'NGN',  currency_amt: '760.03'},
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'CEL', currency: 'EUR', currency_amt: '760.03' },
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'SOL', currency: 'CAD', currency_amt: '760.03' },
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'COD', currency: 'AUD', currency_amt: '760.03' },
]);

const selectedAsset = ref(assets.value[1]);

</script>

<style>
.p-dropdown {
  box-shadow: none;
  background-color: transparent;
  border:0;
  padding: 0;
  color:#fff !important;
}
.p-dropdown {
  box-shadow: none !important;
  outline: none;
  border:0;
  color:#fff !important;
}
 .p-dropdown-item {
  padding: 3px 13px !important;
   margin: 10px;
   font-size: 13px;
}
.p-dropdown-trigger {
  /*display: none;*/
  padding: 0 !important;
  justify-content: flex-start;
  width:10px !important;
  color: #d1d1d1 !important;
}
.p-dropdown-label {
  font-size: 13px;
  padding-right: 5px;
  color: #d1d1d1;
}
p-dropdown-label p-inputtext{
  display: none;
}
.p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
  color: #121b25;
  background: rgba(18, 27, 37, 0.22) !important;
}
.icon-size {
  font-size: 12px;
}

</style>
