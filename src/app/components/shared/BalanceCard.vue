<template>
  <article class=" w-full">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-wallet"></i><span class="pl-2">Wallet Balance</span></div>
    <div class="mt-3 px-4 py-5 bg-gray-900 rounded flex justify-between items-center">
      <div >
        <p class="text-gray-400 font-semibold text-xs pb-1">Total Assets</p>
        <div class="flex items-center">
          <div class="text-gray-100 font-semibold text-xl">{{ selectedAsset.fiat }}.00</div>
          <Dropdown v-model="selectedAsset" :options="assets" optionLabel="currency"></Dropdown>
        </div>
        <i class="pi pi-sort-alt text-gray-300"></i>
        <p class="font-semibold text-sm"><span class="text-gray-400">{{selectedAsset.token}}</span> <small class="text-gray-500">{{selectedAsset.code}}</small></p>
      </div>
      <i class="pi pi-wallet text-gray-600" style="font-size: 4rem"></i>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

const assets = ref<Array<Object>[]>([
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'BTC', currency: 'USD', currency_amt: '760.03' },
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'BNB', currency: 'NGN',  currency_amt: '760.03'},
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'CEL', currency: 'EUR', currency_amt: '760.03' },
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'SOL', currency: 'CAD', currency_amt: '760.03' },
  { fiat:'2000', token: '000.003', name: 'bitcoin', code: 'COD', currency: 'AUD', currency_amt: '760.03' },
]);

const selectedAsset = ref<string>(assets.value[1]);

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

</style>
