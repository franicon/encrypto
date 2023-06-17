<template>

   <!--logo-->
   <div class="w-full px-4  hidden md:flex md:items-center h-[60px]">
       <div class="font-bold text-3xl text-gray-50">encrypto</div>
   </div>
   <!--menu-->
   <div class="main-layout">
       <div v-for="link in menu" :key="link.label" class="grid mid-gap grid-cols-6 md:grid-cols-1 md:gap-0 md:grid">
        <template v-if="link.label === 'mobile'">
          <div v-for="item in link.children" :key="item.label">
            <NavItem :item="item"/>
          </div>
        </template>
       </div>
     <div class="bg-gray-200 bg-opacity-20 p-4 space-y-2 hidden md:flex md:flex-col">
       <p class="text-xs font-bold text-gray-300">Encrypto - Crypto Dashboard &copy;</p>
       <p class="text-xs text-gray-400">2023 All Right Reserved</p>
       <p class="text-xs text-gray-400 pt-4">Made with ❤ by Abayomi</p>
     </div>
   </div>
</template>

<script setup lang="ts">
import NavItem from "@/app/layouts/navlist/Index.vue";
import navList from "@/app/layouts/menu/@menu";

defineProps<{ menu:typeof   navList}>();
</script>

<style scoped>
@media (min-width: 200px) {
  .mid-gap {
    grid-column-gap: 1.3rem;
  }
}
@media (min-width: 300px) {
  .mid-gap {
    grid-column-gap: 2rem;
  }
}
@media (min-width: 400px) {
  .mid-gap {
    grid-column-gap: 3.7rem;
  }
}
@media (min-width: 600px) {
  .mid-gap {
    grid-column-gap: 4.5rem;
  }
}
@media (min-width: 700px) {
  .mid-gap {
    grid-column-gap: 5rem;
  }
}
</style>
