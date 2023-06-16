<template>
    <div class="">
    <template v-if="item.to">
      <router-link :to="`${item.to}`" class="navbar">
        <div :class="item.icon + ' size'"></div>
        <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold">{{ item.label }}</div>
      </router-link>
    </template>
   <template v-else>
     <div class="navbar cursor-pointer"  @click="openPosition">
       <div :class="item.icon + ' size'"></div>
       <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold ">{{ item.label }}</div>
     </div>
   </template>
  </div>
</template>
<script  setup lang="ts">
import {useModalStore} from "@/app/stores/other/modal";

defineProps<{item: menu}>()
import { ref } from "vue";
import type {menu} from "@/app/layouts/menu/@menu";

const visible = ref(false);
const store = useModalStore();

const openPosition = () => {
  visible.value = true;
  store.setVisible();
}
</script>

<style>
  @media (max-width: 768px) {
    .size{
      font-size: 1.2rem;
    }
  }
  @media (max-width: 468px) {
    .size{
      font-size: 1rem;
    }
  }
</style>


