<template>
  <div class="py-3 px-8 flex justify-between items-center">
    <!--sidebar toggle-->
    <div class="flex items-center space-x-0 lg:space-x-6 2xl:space-x-0">
      <div class=" hidden md:flex 2xl:hidden">
        <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem"
           @click="visible"></i>
      </div>
      <div class="text-2xl capitalize font-medium">{{title}}</div>
    </div>
    <!--avatar-->
    <div class="flex">
      <Avatar icon="pi pi-bell" class="mr-3" shape="circle"/>
      <div class="cursor-pointer card flex justify-content-center" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu">
        <Avatar image="/public/avata.png" shape="circle"/>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
          <template #start>
            <div class="w-full p-link flex items-center text-color hover:surface-200 ">
              <Avatar image="/public/avata.png" class="mx-2" shape="circle" />
              <div class="flex flex-col">
                <span class="font-bold text-sm">Yomi Aluko</span>
                <span class="text-xs">Developer</span>
              </div>
            </div>
          </template>
          <template #end>
            <div class="w-full p-link flex items-center p-2 pl-3 text-color hover:surface-200 border-noround">
              <div class="px-6 py-2">
                <i class="pi pi-sign-out"/>
                <span class="ml-2">Log Out</span>
              </div>
            </div>
          </template>
        </Menu>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';

import {watch, ref, onMounted} from "vue";
import { useRoute } from "vue-router";
import { useModalStore } from "@/app/stores/other/modal";

const route = useRoute();
const store = useModalStore();

const title = ref<string>();
const menu = ref();
const items = ref([
  { separator: true },
  { label: 'Profile', icon: 'pi pi-fw pi-user' },
  { label: 'Settings', icon: 'pi pi-fw pi-cog' },
  { separator: true }
]);

const toggle = (event) => {
  menu.value.toggle(event);
};

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

<style scoped>

</style>
