<template>
  <article class="w-full">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-images"></i><span class="pl-2">NFT Profile</span></div>
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
