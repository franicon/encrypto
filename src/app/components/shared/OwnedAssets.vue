<template>
  <div class="relative border rounded px-2">
    <div class="mt-5 overflow-hidden overflow-y-visible">
      <AssetsCard :assets="assets" :owned="true" style-prop="border mb-4 px-2 rounded"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import topsAssets from "@/app/_mock/assets";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";

const assets = ref<Array<string>>(topsAssets);
</script>

<style scoped>

</style>
