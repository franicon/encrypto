<template>
    <div class="">
    <template v-if="item.to">
      <router-link :to="`${item.to}`" class="navbar">
        <div :class="item.icon + ' size'"></div>
        <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold">{{ item.label }}</div>
      </router-link>
    </template>
   <template v-else>
     <div class="navbar">
       <div :class="item.icon + ' size'"></div>
       <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold ">{{ item.label }}</div>
     </div>
   </template>
  </div>
</template>
<script  setup lang="ts">
defineProps<{item: Object}>()
</script>

<style>
  .size{
    font-size: 1.6rem;
  }
</style>


