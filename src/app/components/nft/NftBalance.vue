<template>
  <article class="w-full">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-images"></i><span class="pl-2">Most Popular NFT</span></div>
    <div class="border rounded h-[56.7rem] py-5 px-4 mt-4 relative overflow-x-hidden">
      <div class="grid grid-cols-2 gap-4 items-baseline" >
        <div class="" v-for="asset in assets" :key="asset.name">
          <div :style="{ 'background-image': 'url(/nft/' + asset.img + ')'}" class="w-full h-36 bg-center bg-cover bg-no-repeat rounded-lg"> </div>
          <div class=" pt-2">
            <p class="text-md font-semibold">{{asset.name}}</p>
            <div class="mt-1">
              <div class="flex justify-between items-center ">
                <p class="font-semibold text-gray-600 text-xs">Current Bid</p>
                <p class="text-xs text-gray-400">12 Bids</p>
              </div>
              <button class="text-xs w-full mt-2 border text-gray-900 p-2 rounded hover:bg-gray-950 hover:text-gray-100 duration-500">4.87 ETH</button>
            </div>
            <div class="mt-3">
              <button class="bg-gray-900 w-full border-1 font-semibold text-sm border-gray-900 text-gray-100 py-2 rounded hover:bg-gray-700 hover:text-gray-100 duration-500 px-4">
                <i class="pi pi-shopping-bag icon"></i> <span class="pl-1">Place Bid</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type {ownedAssets} from "@/types";

const assets = ref<Array<ownedAssets>[]>([
  { img: 'monkey-1.webp', name: 'Monkey Props', bids: 12, total: '4.3', token: 'ETH'},
  { img: 'monkey-4.webp', name: 'Panda Boxer', bids: 2, total: '0.34', token: 'ADA'},
  { img: 'monkey-3.webp', name: 'Monkey Bady', bids: 12, total: '4.3', token: 'SOL'},
  { img: 'monkey-5.webp', name: 'Monkey Rocker', bids: 1, total: '0.02', token: 'USDT'},
  { img: 'monkey-2.webp', name: 'Monkey Swagger', bids: 11, total: '4.3', token: 'BNB'},
  { img: 'monkey-1.webp', name: 'Monkey Props', bids: 9, total: '4.3', token: 'ETH'},
]);

</script>

<style scoped>
.icon {
  font-size: 12px;
}

</style>
