<template>
  <nav>
    <div class="w-full">
      <Sidebar v-model:visible="collapseBar">
        <MainLayout :menu="menu"/>
      </Sidebar>
    </div>
  </nav>
</template>

<script  setup lang="ts">
import Sidebar from 'primevue/sidebar';
import navList from "@/app/layouts/menu/@menu";

import MainLayout from "@/app/layouts/menu/MenuLayout.vue"

import { storeToRefs } from "pinia";
import { useModalStore } from "@/app/stores/other/modal";

const store = useModalStore()
const { collapseBar } = storeToRefs(store)

defineProps<{ menu: typeof navList}>();
</script>
<style>
.p-sidebar {
  background-color: rgb(3 7 18) !important;
}
@media (max-width: 767px) {
  .p-sidebar-visible {
    display: none !important;
  }
}
</style>

