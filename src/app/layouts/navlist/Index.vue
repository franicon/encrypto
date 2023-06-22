<template>
    <div class="">
      <router-link :to="`${item.to}`" class="navbar">
        <div :class="item.icon + ' size'"></div>
        <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold">{{ item.label }}</div>
      </router-link>
  </div>
</template>
<script  setup lang="ts">

defineProps<{item: menu}>()
import type {menu} from "@/app/layouts/menu/@menu";
</script>

<style>
  @media (max-width: 768px) {
    .size{
      font-size: 1.2rem;
    }
  }
  @media (max-width: 468px) {
    .size{
      font-size: 1.2rem;
    }
  }
</style>


