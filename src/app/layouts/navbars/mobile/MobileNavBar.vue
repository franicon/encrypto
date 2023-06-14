<template>
  <nav class="fixed w-full bottom-0 md:hidden z-10">
    <div class="w-[100vw] bg-gray-100 relative flex">
      <MainLayout :menu="menu" :others="others"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MainLayout from "@/app/layouts/menu/MenuLayout.vue"
defineProps<{menu:Array<string>, others: Array<string>}>();

</script>

<style scoped>

</style>
