<template>
  <div class="xl:px-8 lg:px-8 md:px-4 px-3 flex justify-between items-center border-gray-900  h-[60px] lg:shadow-lg shadow">
    <!--sidebar toggle-->
    <div class="flex items-center space-x-0 md:space-x-6 2xl:space-x-0">
      <div class="hidden md:flex 2xl:hidden">
        <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem"
           @click="showSideBar"></i>
      </div>
      <div class="xl:text-2xl text-xl capitalize xl:font-medium font-[500] hidden md:flex">{{title}}</div>
    </div>
    <!--avatar-->
    <div class="flex md:w-auto w-full justify-between">
      <Notification/>
      <div class="flex">
        <User/>
        <QrCode/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import User from '@/app/components/shared/UserCard.vue';
import QrCode from '@/app/components/shared/QrCode.vue';
import Notification from '@/app/components/shared/NotificationCard.vue';

import { useRoute } from "vue-router";
import { watch, ref, onMounted } from "vue";
import { useModalStore } from "@/app/stores/other/modal";

const route = useRoute();
const store = useModalStore();

const title = ref<any>('Dashboard');

const showSideBar = () => {
  store.showModal(sidebar = true);
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
