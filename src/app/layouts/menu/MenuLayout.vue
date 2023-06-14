<template>
  <!--side bar-->
  <div class="w-full px-4 pt-3 pb-10">
    <!--Logo-->
    <div class=" flex items-center space-x-4 mx-auto">
      <div class="font-bold text-3xl text-gray-950">encrypto</div>
    </div>
  </div>
  <!--menu-->
  <div class="h-[calc(90vh-50px)] px-4 mt-8 flex flex-col justify-between">
    <div class="w-full">
      <div v-for="link in menu" :key="link.label">
        <div v-for="item in link.children" :key="item.label">
          <NavItem :item="item"/>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div v-for="link in others" :key="link.label">
        <div v-for="item in link.children" :key="item.label">
          <NavItem :item="item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavItem from "@/app/layouts/navlist/Index.vue";
defineProps<{ menu: Array<string>, others: Array<string> }>();
</script>

<style scoped>

</style>
