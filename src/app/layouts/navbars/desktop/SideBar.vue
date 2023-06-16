<template>
  <nav class="hidden 2xl:flex 2xl:flex-col w-[300px] h-full bg-white border-r px-5">
    <MainLayout :menu="menu"/>
  </nav>
</template>
<script setup lang="ts">
import navList from "@/app/layouts/menu/@menu";
import MainLayout from "@/app/layouts/menu/MenuLayout.vue"


defineProps<{ menu: typeof navList }>();
</script>
