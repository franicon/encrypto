<template>
   <!--logo-->
   <div class="w-full px-6 pt-3 pb-10 hidden md:flex">
       <div class="font-bold text-3xl text-gray-950">encrypto</div>
   </div>
   <!--menu-->
   <div class="main-layout">
       <div v-for="link in menu" :key="link.label" class="">
         <div v-for="item in link.children" :key="item.label" >
           <NavItem :item="item"/>
         </div>
       </div>
<!--       <div v-for="link in others" :key="link.label" class="">-->
<!--         <div v-for="item in link.children" :key="item.label">-->
<!--           <NavItem :item="item"/>-->
<!--         </div>-->
<!--       </div>-->
   </div>
</template>

<script setup lang="ts">
import NavItem from "@/app/layouts/navlist/Index.vue";
defineProps<{ menu: Array<string>, others: Array<string>}>();
</script>

<style scoped>

</style>
