<template>
 <div class="md:hidden flex">
   <div>
     <Avatar icon="pi pi-qrcode" class="ml-3 cursor-pointer dark-bg" @click="toggle"/>
     <div class="relative">
       <OverlayPanel ref="op" appendTo="body">
         <i class="ml-3 cursor-pointer pi pi-qrcode"></i>
       </OverlayPanel>
     </div>
   </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Avatar from 'primevue/avatar';
import OverlayPanel from 'primevue/overlaypanel';

const op = ref();

const toggle = (event: Event) => {
  op.value.toggle(event);
};

</script>

<style>
.p-overlaypanel-content {
  padding: 0 !important;
}
@media (max-width: 500px) {
  .p-overlaypanel {
    left:0;
    right:0;
  }
  .p-overlaypanel {
    margin: 10px !important;
  }
}
</style>
