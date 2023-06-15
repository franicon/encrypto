<template>
  <nav class="fixed w-full bottom-0 md:hidden z-10">
    <div class="bg-gray-100 relative">
      <MainLayout :menu="menu"/>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MainLayout from "@/app/layouts/menu/MenuLayout.vue";
export interface menuType {
  label: string;
  icon: string;
  to?: string;
  children?: menu[]
}

defineProps<{ menu: menuType }>();

</script>

<style scoped>

</style>
