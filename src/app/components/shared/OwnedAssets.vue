<template>
  <div class="relative border rounded px-2">
    <div class="mt-5 h-[45rem] overflow-hidden overflow-y-visible">
      <AssetsCard :assets="assets" :owned="true" style-prop="border mb-4 px-2 rounded"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {owned} from "@/app/_mock/assets.ts";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";

const assets = ref<Array<string>>(owned);
</script>

<style scoped>

</style>
