<template>
  <nav class="flex 2xl:hidden">
    <div class="w-full ">
      <Sidebar v-model:visible="collapseBar">
        <div class="w-full px-4 pb-8">
          <div class="font-semibold text-3xl">Encrypto</div>
        </div>
        <!--menu-->
        <div class="h-[calc(90vh-50px)] px-4">
          <div class="">menu</div>
        </div>
      </Sidebar>
    </div>
  </nav>
</template>

<script  setup lang="ts">
import Sidebar from 'primevue/sidebar';

import { storeToRefs } from "pinia";
import { useModalStore } from "@/app/stores/other/modal";

const store = useModalStore()
const { collapseBar } = storeToRefs(store)

</script>

