<template>
  <nav class="hidden 2xl:flex 2xl:flex-col w-[300px] h-full bg-gray-950 border-r ">
    <MainLayout :menu="menu"/>
  </nav>
</template>
<script setup lang="ts">
import navList from "@/app/layouts/menu/@menu";
import MainLayout from "@/app/layouts/menu/MenuLayout.vue"

defineProps<{ menu: typeof navList }>();
</script>
