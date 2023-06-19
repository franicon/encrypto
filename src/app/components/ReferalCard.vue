<template>
  <div class="relative mt-4">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-users"></i><span class="pl-2">Invite & Win</span>
    </div>
    <div class="mt-3 h-[25rem] overflow-hidden overflow-y-visible p-3 border rounded">
      <div class="py-4">
        <div class="font-semibold text-gray-600 text-xl">Refer Bonus</div>
      </div>
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
