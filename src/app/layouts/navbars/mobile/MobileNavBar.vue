<template>
  <nav class="fixed w-full bottom-0 md:hidden z-10">
    <div class="bg-gray-100 relative">
      <MainLayout :menu="menu"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import navList from "@/app/layouts/menu/@menu";
import MainLayout from "@/app/layouts/menu/MenuLayout.vue";

defineProps<{ menu: typeof navList}>();

</script>

<style scoped>

</style>
