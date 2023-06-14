<template>
  <div>
    <div class="w-screen h-screen flex overflow-hidden">
      <!--side bar-->
      <SideBar :menu="menu" :others="others"/>
      <!--sidebar collapse-->
      <NavCollapse/>
      <!--top bar-->
      <div class="w-full h-full">
        <div class="border-b py-3 px-8 flex justify-end">
          <!--sidebar toggle-->
          <div class="flex 2xl:hidden">
            <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem"
               @click="visible"></i>
          </div>
          <!--avatar-->
          <div class="">
            <Avatar image="/public/avata.png" shape="circle"/>
          </div>
        </div>
        <!--main-->
        <section class="h-[calc(100vh-50px)] relative overflow-x-hidden my-5">
          <RouterView/>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import navList from "@/app/layouts/menu/menu.ts";
import otherList from "@/app/layouts/menu/sub-menu";

import Avatar from 'primevue/avatar';
import SideBar from "@/app/layouts/navbars/SideBar.vue";
import NavCollapse from "@/app/layouts/navbars/CollapseSideBar.vue";

import {ref} from "vue";
import {useModalStore} from "@/app/stores/other/modal";

const store = useModalStore()
const menu = ref(navList);
const others = ref(otherList);

function visible() {
  store.setVisible()
}

</script>

<style scoped>

</style>
