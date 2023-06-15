<template>
    <div class="">
      <Dialog v-model:visible="visible" :position="position" modal :header="item.label" :style="{ width: '20vw', top: '1px' }">
      </Dialog>
    <template v-if="item.to">
      <router-link :to="`${item.to}`" class="navbar">
        <div :class="item.icon + ' size'"></div>
        <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold">{{ item.label }}</div>
      </router-link>
    </template>
   <template v-else>
     <div class="navbar cursor-pointer"  @click="openPosition('left')">
       <div :class="item.icon + ' size'"></div>
       <div class="md:text-[15px] hidden md:flex text-[12px] font-semibold ">{{ item.label }}</div>
     </div>
   </template>
  </div>
</template>
<script  setup lang="ts">
defineProps<{item: Object}>()
import Dialog from 'primevue/dialog';
import { ref } from "vue";

const position = ref('center');
const visible = ref(false);

const openPosition = (pos) => {
  position.value = pos;
  visible.value = true;
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


