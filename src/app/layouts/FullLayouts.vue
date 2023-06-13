<template>
  <div>
    <div class="w-screen h-screen flex overflow-hidden">
      <!--sidebar-->
<!--      <nav class="hidden 2xl:flex 2xl:flex-col w-[400px] h-full bg-white border-r ">-->
<!--        <div class="w-full px-4 py-8">-->
<!--          <div class="font-semibold text-3xl">Encrypto</div>-->
<!--        </div>-->
<!--        &lt;!&ndash;menu&ndash;&gt;-->
<!--        <div class="h-[calc(90vh-50px)] px-4">-->
<!--          <div class="">menu</div>-->
<!--        </div>-->
<!--      </nav>-->
      <nav >
        <div class="w-full ">
          <Sidebar v-model:visible="visible">
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
      <!--top bar-->
      <div class="w-full h-full p-8">
        <div class="">
          <i class="pi pi-align-right text-black cursor-pointer hover:text-gray-600" style="font-size: 1.8rem" @click="visible = true"></i>
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
import Sidebar from 'primevue/sidebar';
import { ref } from "vue";

const visible = ref(false);

</script>

<style scoped>

</style>
