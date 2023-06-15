<template>
   <!--logo-->
   <div class="w-full px-6 pt-3 pb-10 hidden md:flex">
       <div class="font-bold text-3xl text-gray-950">encrypto</div>
   </div>
   <!--menu-->
   <div class="main-layout">
       <div v-for="link in menu" :key="link.label" class="grid mid-gap grid-cols-7 md:grid-cols-1 md:gap-0 md:grid">
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
export interface menuType {
  label: string;
  icon: string;
  to?: string;
  children?: menu[]
}

defineProps<{ menu: menuType }>();
</script>

<style scoped>
@media (min-width: 200px) {
  .mid-gap {
    grid-column-gap: 1.3rem;
  }
}
@media (min-width: 300px) {
  .mid-gap {
    grid-column-gap: 1.8rem;
  }
}
@media (min-width: 400px) {
  .mid-gap {
    grid-column-gap: 2.5rem;
  }
}
@media (min-width: 600px) {
  .mid-gap {
    grid-column-gap: 4rem;
  }
}
@media (min-width: 700px) {
  .mid-gap {
    grid-column-gap: 5rem;
  }
}
</style>
