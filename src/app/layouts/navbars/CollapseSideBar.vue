<template>
  <nav class="flex 2xl:hidden">
    <div class="w-full">
      <!--side bar-->
      <Sidebar v-model:visible="collapseBar">
        <!--side bar-->
        <div class="w-full px-4 py-8">
          <div class=" flex items-center space-x-4 mx-auto">
            <!--        <img src="public/logo.svg" class="flex h-12" alt="logo">-->
            <div class="font-bold text-3xl">encrypto</div>
          </div>
        </div>
        <!--menu-->
        <div class="h-[calc(90vh-50px)] px-4 mt-8 flex flex-col justify-between">
          <div class="w-full">
            <div v-for="link in menu" :key="link.label">
              <div v-for="item in link.children" :key="item.label">
                <NavItem :item="item"/>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div v-for="link in others" :key="link.label">
              <div v-for="item in link.children" :key="item.label">
                <NavItem :item="item"/>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  </nav>
</template>

<script  setup lang="ts">
import Sidebar from 'primevue/sidebar';
import NavItem from "@/app/layouts/navlist/Index.vue";

import { storeToRefs } from "pinia";
import { useModalStore } from "@/app/stores/other/modal";

const store = useModalStore()
const { collapseBar } = storeToRefs(store)

defineProps<{menu:Array<string>, others: Array<string>}>();
</script>

