<template>
  <div v-if="item.to">
    <router-link :to="`${item.to}`"  class="space-x-4 flex items-center text-gray-400 mb-4 p-3 active">
      <div :class="item.icon + ' inline-flex'" style="font-size: 1.2rem"></div>
      <div class="text-[16px] font-semibold ">{{ item.label }}</div>
    </router-link>
  </div>
  <div v-else class="space-x-4 flex items-center p-3">
    <div :class="item.icon + ' inline-flex'" style="font-size: 1.2rem"></div>
    <div class="text-md font-semibold ">{{ item.label }}</div>
  </div>
</template>

<script  setup lang="ts">
defineProps<{item: Object}>()
</script>

<style>

</style>


