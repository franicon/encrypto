<template>
  <nav class="flex 2xl:hidden">
    <div class="w-full">
      <Sidebar v-model:visible="collapseBar">
        <MainLayout :menu="menu" :others="others"/>
      </Sidebar>
    </div>
  </nav>
</template>

<script  setup lang="ts">
import Sidebar from 'primevue/sidebar';
import MainLayout from "@/app/layouts/menu/MenuLayout.vue"

import { storeToRefs } from "pinia";
import { useModalStore } from "@/app/stores/other/modal";

const store = useModalStore()
const { collapseBar } = storeToRefs(store)

defineProps<{menu:Array<string>, others: Array<string>}>();
</script>

