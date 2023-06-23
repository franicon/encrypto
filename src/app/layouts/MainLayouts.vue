<template>
  <div>
    <div class="w-screen h-screen flex overflow-hidden">
      <!--side-->
     <div class="md:hidden xl:flex">
       <SideBar :menu="menuList"/>
     </div>
      <!--sidebar collapse-->
      <NavCollapse :menu="menuList"/>
      <!--top-->
      <div class="w-full h-full">
        <MobileNavBar :menu="menuList"/>
        <!--top nav-->
        <TopBar/>
        <!--main-->
        <section class="h-[calc(100vh-50px)] xl:px-8 lg:px-8 md:px-4 px-3 relative overflow-x-hidden lg:pt-8 pt-8">
          <RouterView/>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import navList from "@/app/layouts/menu/@menu";

import TopBar from "@/app/layouts/navbars/TopBar.vue";
import SideBar from "@/app/layouts/navbars/desktop/SideBar.vue";
import MobileNavBar from "@/app/layouts/navbars/mobile/MobileNavBar.vue";
import NavCollapse from "@/app/layouts/navbars/desktop/CollapseSideBar.vue";

import {shallowRef} from "vue";

const menuList = shallowRef(navList);
</script>

