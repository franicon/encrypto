<template>
  <div class="relative border rounded">
    <div class=" h-[49rem] overflow-hidden relative">
      <AssetsCard :assets="assets" :owned="true" style-prop="border-b py-4 rounded"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {owned} from "@/app/_mock/assets";
import AssetsCard from "@/app/components/shared/AssetsCard.vue";

const assets = ref(owned);
</script>

<style scoped>

</style>
