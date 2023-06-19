<template>
  <div class="relative mt-4">
    <div class="text-gray-700 text-xl font-semibold"><i class="pi pi-book"></i><span class="pl-2">Transaction History</span>
    </div>
    <div class="mt-3 h-[25rem] overflow-hidden overflow-y-visible border rounded p-2">
      <div class="py-4">
        <div class="card">
          <Timeline :value="events" class="w-full md:w-20rem">
            <template #marker="slotProps">
                <span class=" text-white rounded-full w-6 h-6 flex items-center justify-center z-1 shadow-1" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon +' icon'"></i>
                </span>
            </template>
            <template #content="slotProps">
              <p class="text-[10px] text-gray-500">{{slotProps.item.date}}</p>

              <div class="flex justify-between">
                <div class="">
                  <p class="text-gray-700 font-semibold">Ethereum (ETH)</p>
                  <p :style="{ color: slotProps.item.color }" class="font-semibold">{{ slotProps.item.status }}</p>
                </div>
                <div class="text-end">
                  <p class="font-gray-700">0.031</p>
                  <p class="font-semibold text-gray-500 text-xs">2000 NGN</p>
                </div>
              </div>
            </template>
          </Timeline>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Timeline from 'primevue/timeline';

const events = ref([
  { status: 'Withdraw', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#f64627'},
  { status: 'Withdraw', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#f64627'},
  { status: 'Deposit', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#28ba96'},
  { status: 'Withdraw', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#f64627'},
  { status: 'Deposit', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#28ba96'},
  { status: 'Deposit', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#28ba96'},
  { status: 'Deposit', date: '15/10/2020 14:00', icon: 'pi pi-arrow-down-left', color: '#28ba96'},
  { status: 'Withdraw', date: '15/10/2020 10:30', icon: 'pi pi-arrow-up-right', color: '#f64627'},
]);

</script>

<style>
.p-timeline-event-opposite {
  flex: none !important;
  padding: 0 5px 0 0 !important;
}
.p-timeline-event-content {
  font-size: 12px;
}
.p-timeline .p-timeline-event-marker {
  border: solid 2px #121b25;
}
.icon {
  font-size: 10px;
}
</style>
