<template>
  <div class="relative px-2 mt-3">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-book"></i><span class="pl-2">Transaction History</span>
    </div>
    <div class="mt-3 h-[25rem] overflow-hidden overflow-y-visible">
      <AssetsCard :assets="assets"/>
    </div>
  </div></template>

<script setup lang="ts">
import {ref} from "vue";
import {topsAssets} from "@/app/_mock/assets.ts";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";
const assets = ref<Array<string>>(topsAssets);
</script>

<style scoped>

</style>
