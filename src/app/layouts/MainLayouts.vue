<template>
  <div>
    <div class="w-screen h-screen flex overflow-hidden">
      <!--side-->
      <SideBar :menu="menuList" :others="others"/>
      <!--sidebar collapse-->
      <NavCollapse :menu="menuList" :others="others"/>
      <!--top-->
      <div class="w-full h-full">
        <!--top nav-->
        <TopBar/>
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

import TopBar from "@/app/layouts/navbars/TopBar.vue";
import SideBar from "@/app/layouts/navbars/SideBar.vue";
import NavCollapse from "@/app/layouts/navbars/CollapseSideBar.vue";

import {ref} from "vue";

const menuList = ref(navList);
const others = ref(otherList);


</script>

<style scoped>

</style>
