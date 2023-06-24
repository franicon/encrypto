<template>
  <div class="relative rounded">
    <div class="text-gray-700 text-xl font-semibold pb-3"><i class="pi pi-bolt"></i><span class="pl-2">Top Currency</span>
    </div>
    <div class=" h-[27rem] overflow-hidden border px-3">
      <AssetsCard :assets="allAssets"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {topsAssets} from "@/app/_mock/assets";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";

const allAssets = ref(topsAssets);
</script>

<style scoped>

</style>
