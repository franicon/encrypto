<template>
   <!--logo-->
   <div class="w-full px-6 pt-3 pb-10 hidden md:flex">
       <div class="font-bold text-3xl text-gray-950">encrypto</div>
   </div>
   <!--menu-->
   <div class="main-layout">
       <div v-for="link in menu" :key="link.label" class="grid grid-cols-7 xs:gap-8 sm:gap-16 gap-10 grid-cols-1 md:gap-0 md:grid">
        <template v-if="link.label === 'mobile'">
          <div v-for="item in link.children" :key="item.label">
            <NavItem :item="item"/>
          </div>
        </template>
       </div>
   </div>
</template>

<script setup lang="ts">
import NavItem from "@/app/layouts/navlist/Index.vue";
defineProps<{ menu: Array<string>}>();
</script>

<style scoped>

</style>
