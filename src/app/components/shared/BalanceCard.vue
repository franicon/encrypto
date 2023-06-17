<template>
  <article class="md:w-[350px] w-full">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-wallet"></i><span class="pl-2">Wallet Balance</span></div>
    <div class="mt-3 px-4 py-5 bg-gray-900 rounded flex justify-between items-center">
      <div>
        <p class="text-gray-400 font-semibold text-xs pb-1">Total Assets</p>
        <div class="flex items-center">
          <h1 class="text-gray-100 font-semibold text-xl pb-1">5000.01</h1>
          <Dropdown v-model="selectedCountry" value="BTC" :options="countries" optionLabel="code" >
            <span class="p-dropdown-label p-inputtext" tabindex="0" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="pv_id_1_list" aria-disabled="true" aria-label="BTC">BTC</span>
            <template #option="slotProps">
              <div>
                <div>{{ slotProps.option.code }}</div>
              </div>
            </template>
          </Dropdown>
        </div>

        <p class="font-semibold text-sm"><span class="text-gray-400">0.00004</span> <small class="text-gray-500">BTC</small></p>
      </div>
      <i class="pi pi-wallet text-gray-600" style="font-size: 4rem"></i>
    </div>
  </article>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Dropdown from 'primevue/dropdown';


const selectedCountry = ref();
const countries = ref([
  { name: 'Australia', code: 'BTC' },
  { name: 'Brazil', code: 'ETH' },
  { name: 'China', code: 'BNB' },
  { name: 'Egypt', code: 'CE' },
  { name: 'France', code: 'SOL' },
  { name: 'Germany', code: 'DOG' },
]);
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
</style>
