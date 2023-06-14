<template>
  <nav class="hidden 2xl:flex 2xl:flex-col w-[400px] h-full bg-white border-r px-5">
    <MainLayout :menu="menu" :others="others"/>
  </nav>
</template>
<script setup lang="ts">
import MainLayout from "@/app/layouts/menu/MenuLayout.vue"
defineProps<{ menu: Array<string>, others: Array<string> }>();
</script>
