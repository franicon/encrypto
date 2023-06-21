<template>
  <div class="relative rounded">
    <div class="text-gray-700 text-xl font-semibold pb-2"><i class="pi pi-bolt"></i><span class="pl-2">Top Currency</span>
    </div>
    <div class="mt-1 h-[26rem] overflow-hidden overflow-y-visible border p-3">
      <AssetsCard :assets="allAssets"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {topsAssets} from "@/app/_mock/assets";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";
import type {assets} from "@/types";

const allAssets = ref(topsAssets);
</script>

<style scoped>

</style>
