<template>
  <!--Amount-->
  <div class="flex flex-col gap-2 mt-8">
    <label for="username" class="text-sm font-[500]">Amount</label>
    <InputNumber v-model="amount" inputId="minmaxfraction" :min="2000" :max="5000" :minFractionDigits="2"
                 :maxFractionDigits="5"/>
    <small id="username-help" class="text-gray-400 text-xs">Min: 5.00 USD | Max: 500.00 USD.</small>
  </div>

  <!--DropDown-->
  <div class="mt-8">
    <p class="text-sm font-[500] pb-2">Select Coin</p>
    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-14rem">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex items-center gap-2 P-1">
          <img :alt="slotProps.value.label" :src="'/coin/' + slotProps.value.img"
               :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px"/>
          <div>{{ slotProps.value.name }} ({{ slotProps.value.code }}) <p class="text-xs text-gray-500">1 btc @200</p>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>

  <!--  Payment Method-->
  <div class="card flex justify-content-center mt-8 border p-4">
    <div class="flex flex-col gap-3 w-full">
      <div v-for="category in categories" :key="category.key" class="flex align-items-center pb-3 border-b">
        <div class="flex justify-between w-full pb-3">
          <div class="">
            <RadioButton v-model="selectedCategory" :inputId="category.key" :value="category.name"/>
            <label :for="category.key" class="ml-2">{{ category.name }}</label>
          </div>
          <div><i :class="'pi ' + category.icon"></i></div>
        </div>
      </div>
    </div>
  </div>

  <!--Buy Button-->
  <div class="mt-8 flex justify-center">
    <button class="w-56 rounded bg-gray-700 hover:bg-gray-800 transition-all duration-500 py-4 text-gray-50 font-[500]"
            @click="visible = true">Buy Now
    </button>
  </div>

  <!--Modal Buy-->
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" :closable="false" modal header="Confirm Order" class="2xl:w-[30vw] xl:w-[50vw] lg:w-[60vw] md:w-[80vw] w-[90vw]">
      <div>
        <div class="text-center py-4">
          <i class="pi pi-qrcode text-yellow-500 pb-3" style="font-size: 2rem"></i>
          <h1 class="font-[600] text-xl py-3">Confirm Order</h1>
          <p class="text-sm">You are about to make a purchase of <br> <span class="text-gray-400 font-[500] pt-2 text-sm">0.0024 BTC @ 1 BTC = 2,873,930</span></p>
        </div>
        <div class="mt-3">
          <!--DropDown Wallet-->
          <div class="mt-8">
            <p class="text-md font-[500] pb-2">Receiving Address</p>
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
            <p class="text-md font-[500] pb-2">Order Details</p>
            <div class="card flex justify-content-center border px-3 pt-2">
              <div class="flex flex-col gap-3 w-full relative overflow-hidden">

              </div>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDialog>
      </ConfirmDialog>
      <template #header>
        <div class="flex justify-end w-full"><Button icon="pi pi-times"  text @click="confirm1()"/></div>
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import ConfirmDialog from 'primevue/confirmdialog';

import { ref } from "vue";

import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

const toast = useToast();
const confirm = useConfirm();

const visible = ref(false);

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

const cities = ref([
  {name: 'Bitcoin', code: 'BTC', img: 'btc.svg'},
  {name: 'Ethereum', code: 'ETH', img: 'eth.svg'},
  {name: 'Tron', code: 'TRX', img: 'tron.webp'},
  {name: 'Tether', code: 'USDT', img: 'usdt.svg'},
  {name: 'Shiba Inu', code: 'SHIB', img: 'shiba.webp'}
]);

const categories = ref([
  {name: 'Paychant', key: 'A', icon: 'pi-sync'},
  {name: 'Carbon', key: 'M', icon: 'pi-money-bill'},
  {name: 'PayStack', key: 'P', icon: 'pi-image'},

]);

const wallet = ref([
    { name: 'Bitcoin', address: 'bc1qxy2kgdygjrs-------493p83kkfjhx0wlh', img: 'btc.svg'},
    { name: 'Others', address: '', img: 'btc.svg'},
])

const amount = ref(2000);
const selectedCity = ref(cities.value[0]);
const selectedCategory = ref('Bank Transfer');
const selectedWallet = ref('Bitcoin')

const logData = () => {
  console.log(selectedCity.value.name, selectedCategory.value, amount.value)
}

</script>

<style scoped>
.address-input {
  border: 0 !important;
  font-size: small;
}
</style>
