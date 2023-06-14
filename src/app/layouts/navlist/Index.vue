<template>
  <div v-if="item.to">
    <router-link :to="`${item.to}`" class="md:space-x-4 space-y-3 md:space-y-0 flex md:flex-row flex-col items-center text-gray-400 md:mb-4 py-6 md:p-3 active">
      <div :class="item.icon + ' inline-flex px-6 md:px-0'"></div>
      <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold">{{ item.label }}</div>
    </router-link>
  </div>
  <div v-else class="space-x-4 flex md:flex-row flex-col items-center text-gray-400 md:p-3 space-y-3">
    <div :class="item.icon + ' inline-flex md:px-0 px-6'"></div>
    <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold ">{{ item.label }}</div>
  </div>
</template>

<script  setup lang="ts">
defineProps<{item: Object}>()
</script>

<style>

</style>


