<template>
  <Avatar icon="pi pi-bell" class="mr-3 cursor-pointer" shape="circle" @click="toggle"/>
  <div class="relative">
    <OverlayPanel ref="op" appendTo="body" >
      <div>
        <div class="text-sm bg-gray-500 text-white px-20 py-3 font-semibold text-center">4 New Notifications</div>
        <div class="pt-5">
            <div class="mb-4 px-3 border-b pb-2">
              <div class="text-xs text-red-600 font-semibold ">Failed Withdrawal</div>
              <span class="text-xs text-gray-400">Withdrawal of 0.00431 Btc Transaction has failed.</span>
            </div>
          <div class="mb-4 px-3 border-b pb-2">
            <div class="text-xs text-red-600 font-semibold ">Failed Withdrawal</div>
            <span class="text-xs text-gray-400">Withdrawal of 0.00431 Btc Transaction has failed.</span>
          </div>
          <div class="mb-4 px-3 ">
            <div class="text-xs text-red-600 font-semibold ">Failed Withdrawal</div>
            <span class="text-xs text-gray-400">Withdrawal of 0.00431 Btc Transaction has failed.</span>
          </div>
        </div>
        <div class=" border-t text-xs text-gray-700 px-20 py-3 text-center">Show all</div>
      </div>
    </OverlayPanel>
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
