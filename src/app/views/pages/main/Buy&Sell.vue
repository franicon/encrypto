<template>
  <div class="w-full h-full xl:mt-14">
    <div class="xl:w-[30vw] w-[90vw] border rounded mx-auto p-10 shadow-sm">
      <div class="flex gap-3 justify-center">
        <template  v-for="tab in tabs" :key="tab.id">
          <button class="px-2 py-2 rounded text-xs font-[500] shadow-lg" :class="isActive(tab.active)" @click="show(tab.id)">
            <i class="pi pi-database"></i> {{ tab.type }}
          </button>
        </template>
      </div>
      <div class="mt-8" v-if="setTab">
        <p class="text-sm font-[500] pb-2">Select Coin</p>
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem">
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-2 p-2">
              <img :alt="slotProps.value.label" :src="'/coin/' + slotProps.value.img" :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px" />
              <div>{{ slotProps.value.name }} ({{slotProps.value.code}}) <p class="text-xs text-gray-500">1 btc @200</p></div>
            </div>
            <span v-else>
            {{ slotProps.placeholder }}
        </span>
          </template>
        </Dropdown>
        <div class="flex flex-col gap-2 mt-8">
          <label for="username" class="text-sm font-[500]">Amount</label>
          <InputText id="username" class="p-inputtext-lg" aria-describedby="username-help" />
          <small id="username-help" class="text-gray-400 text-xs">Min: 5.00 USD | Max: 500.00 USD.</small>
        </div>
        <div class="card flex justify-content-center mt-8 border p-4">
          <div class="flex flex-col gap-3 w-full">
            <div v-for="category in categories" :key="category.key" class="flex align-items-center pb-3 border-b">
              <div class="flex justify-between w-full pb-3">
                <div class="">
                  <RadioButton v-model="selectedCategory" :inputId="category.key" name="pizza" :value="category.name" />
                  <label :for="category.key" class="ml-2">{{ category.name }}</label>
                </div>
                <div class=""><i class="pi pi-wallet" style="color: slateblue"></i></div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <button class="w-full bg-gray-950 hover:bg-gray-700 transition-all duration-500 py-4 text-gray-50 font-[500]">Buy Now</button>
        </div>
      </div>
      <div class="Hello" v-else>Sell</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import RadioButton from 'primevue/radiobutton';

  import { ref } from "vue";
  const tabs = ref([
    {
      id: 1,
      type: 'Buy Aseet',
      active: true
    },
    {
      id: 2,
      type: 'Sell Aseet',
      active: false
    }
  ]);

  const setTab = ref(true)

  const show = (id: number) => {
    tabs.value.find(tab => {
      if (tab.id == id) {
        tab.active = true
        setTab.value = false
      } else {
        tab.active = false
        setTab.value = true
      }
    });
  }

  const isActive = (active: boolean) => {
    switch (active) {
      case true:
        return 'bg-gray-950 text-gray-300 transition-all duration-500';

      case false:
        return 'bg-gray-200';
    }
  }

const cities = ref([
  { name: 'Bitcoin', code: 'BTC', img: 'btc.svg' },
  { name: 'Ethereum', code: 'ETH', img: 'eth.svg' },
  { name: 'Tron', code: 'TRX', img: 'tron.webp' },
  { name: 'Tether', code: 'USDT', img: 'usdt.svg' },
  { name: 'Shiba Inu', code: 'SHIB', img: 'shiba.webp' }
]);
const selectedCategory = ref('Bank Transfer');
const categories = ref([
  { name: 'Crypto Transfer', key: 'A' },
  { name: 'Bank Transfer', key: 'M' },
  { name: 'NFT', key: 'P' },

]);

const selectedCity = ref(cities.value[0]);
</script>

<style scoped>
.p-tabview-ink-bar {
  display: none !important;
}
.p-dropdown {
  border-radius: 0;
  box-shadow: none !important;
  border: #121b25 1px dot-dash;
}
.p-dropdown:focus {
  box-shadow: none !important;
  border: none !important;
  outline: none !important;
}
.p-dropdown:not(.p-disabled):hover {
  border-color: rgba(57, 56, 56, 0.5);
}

:deep(.p-dropdown-item){
  background-color: var(--teal-500);
  border-color: var(--teal-500);
  color: #ffffff;
}

.select {
  color: #121b25 !important;
  background: #EEF2FF !important;
}
</style>
