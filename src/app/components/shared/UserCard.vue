<template>
  <div class="cursor-pointer card flex justify-content-center" @click="toggle">
    <Avatar image="/avata.png" shape="circle"/>
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #start>
        <div class="w-full p-link flex items-center text-color hover:surface-200 mb-10">
          <Avatar image="/public/avata.png" class="mx-2" shape="circle" />
          <div class="flex flex-col">
            <span class="font-bold text-sm">Yomi Aluko</span>
            <span class="text-xs">Developer</span>
          </div>
        </div>
      </template>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';

import {ref} from "vue";

const menu = ref();
const items = ref([
  { separator: true },
  { label: 'My Profile', icon: 'pi pi-fw pi-user', to: '/' },
  { label: 'Account Settings', icon: 'pi pi-cog', to: '/trade',   routerLinkActiveOptions: { exact: true } },
  { separator: true },
  { label: 'Logout', icon: 'pi pi-sign-out', },
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};
</script>

<style scoped>

</style>
