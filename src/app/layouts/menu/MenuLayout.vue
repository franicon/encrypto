<template>
  <!--side bar-->
  <div class="w-full px-6 pt-3 pb-10 hidden md:flex">
    <!--Logo-->
    <div>
      <div class="font-bold text-3xl text-gray-950">encrypto</div>
    </div>
  </div>
  <!--menu-->
    <div class="md:h-[calc(90vh-50px)] relative md:px-4 md:mt-8 flex md:flex-col justify-between">
    <div class="w-full">
      <div v-for="link in menu" :key="link.label" class="flex md:flex-col">
        <div v-for="item in link.children" :key="item.label">
          <NavItem :item="item"/>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div v-for="link in others" :key="link.label" class="flex md:flex-col">
        <div v-for="item in link.children" :key="item.label">
          <NavItem :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavItem from "@/app/layouts/navlist/Index.vue";
defineProps<{ menu: Array<string>, others: Array<string>}>();
</script>

<style scoped>

</style>
