<template>
  <div class="relative border rounded px-2">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-bolt"></i><span class="pl-2">Top Currency</span>
    </div>
    <div class="mt-5 h-[25rem] overflow-hidden overflow-y-visible">
      <!--assets-->
      <div class="flex justify-between items-center" v-for="asset in assets" :key="asset.code">
        <div class="flex gap-3 items-center my-2" >
          <div class="border px-3 py-2 rounded bg-gray-50"><img :src="'/coin/' + asset.img" alt="asset.code"></div>
          <div class="">
            <div class="text-sm font-semibold">BTC</div>
            <div class="text-xs font-semibold">Bitcoin</div>
          </div>
        </div>
        <div>
          <div class="text-end">
            <div class="text-sm font-semibold">1728.89</div>
            <div class="text-xs font-semibold text-emerald-600">1.78%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const assets = ref<Array<string>>([
    {
      img: 'btc.svg',
      code: 'BTC',
      change: '2.5%',
      name: 'Bitcoin',
      rate: '26,481.48',
    },
  {
    img: 'eth.svg',
    code: 'ETH',
    change: '2.5%',
    name: 'Ethereum',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  },
  {
    img: 'usdt.svg',
    code: 'USDT',
    change: '2.5%',
    name: 'Tether',
    rate: '26,481.48',
  }
    ])
</script>

<style scoped>

</style>
