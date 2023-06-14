<template>
  <div>
    <div class="w-screen h-screen flex overflow-hidden">
      <!--side bar-->
      <SideBar/>
      <!--sidebar collapse-->
      <NavCollapse/>
      <!--top bar-->
      <div class="w-full h-full p-8">
        <div class="flex 2xl:hidden">
          <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem"
             @click="visible"></i>
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
import SideBar from "@/app/layouts/SideBar.vue";
import NavCollapse from "@/app/layouts/NavCollapse/Index.vue";

import { useModalStore } from "@/app/stores/other/modal";

const store = useModalStore()

function visible() {
  store.setVisible()
}

</script>

<style scoped>

</style>
