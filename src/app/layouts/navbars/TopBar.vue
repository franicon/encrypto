<template>
  <div class="xl:px-8 lg:px-8 md:px-4 px-3 flex justify-between items-center border-gray-900  h-[60px]">
    <!--sidebar toggle-->
    <div class="flex items-center space-x-0 md:space-x-6 2xl:space-x-0">
      <div class="hidden md:flex 2xl:hidden">
        <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem"
           @click="visible"></i>
      </div>
      <div class="xl:text-2xl text-xl capitalize xl:font-medium font-semibold">{{title}}</div>
    </div>
    <!--avatar-->
    <div class="flex">
      <Notification/>
      <User/>
    </div>
  </div>
</template>

<script setup lang="ts">
import User from '@/app/components/shared/UserCard.vue'
import Notification from '@/app/components/shared/NotificationCard.vue'

import { useRoute } from "vue-router";
import { watch, ref, onMounted } from "vue";
import { useModalStore } from "@/app/stores/other/modal";

const route = useRoute();
const store = useModalStore();

const title = ref<any>('Dashboard');

const visible = () => {
  store.setVisible();
};

watch(() => route.name, () => {
  title.value = route.name
});

onMounted(() => {
  title.value = route.name
})
</script>

<style>
.p-menuitem-text {
  font-size: 13px !important;
  margin: 2px;
}
</style>
