<template>
  <!--assets-->
  <div class="flex justify-between items-center" v-for="asset in assets" :key="asset.code">
    <div class="flex gap-3 items-center my-2" >
      <div class="border px-3 py-2 rounded bg-gray-50"><img class="w-5 h-5"  :src="'/coin/' + asset.img" alt="asset.code"></div>
      <div>
        <div class="text-sm font-semibold">{{asset.code}}</div>
        <div class="text-xs font-semibold">{{asset.name}}</div>
      </div>
    </div>
    <div>
      <div class="text-end">
        <div class="text-sm font-semibold">{{asset.rate}}</div>
        <div class="text-xs font-semibold text-emerald-600">{{ asset.change }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{assets: Array<string>[]}>()
</script>

<style scoped>

</style>
