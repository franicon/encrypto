<template>
  <div class="relative border rounded">
    <div class=" h-[45rem] overflow-hidden overflow-y-visible">
      <AssetsCard :assets="assets" :owned="true" style-prop="border-b py-4 rounded"/>
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
