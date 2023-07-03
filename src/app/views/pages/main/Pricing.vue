<template>
  <div class="p-5 border shadow-lg mt-4">
    <div class="flex justify-between">
      <div class=""><h1 class="text-2xl font-semibold">Prices | Market-Cap</h1></div>
    </div>
    <div class="card mt-4">
      <DataTable :value="assets" removableSort tableStyle="min-width: 50rem">
        <Column header="Coin Name" field="name" sortable style="width: 25%">
          <template #body="{ data }">
            <div class="flex align-items-center gap-2">
              <img alt="flag" :src="`${data.image}`"  style="width: 24px" />
              <span>{{ data.name }}</span>
            </div>
          </template>
        </Column>
        <Column header="Price" field="high_24h" sortable style="width: 10%"></Column>
        <Column header="1Hour" field="Category" sortable style="width: 10%"></Column>
        <Column header="7Days" field="Quantity" sortable style="width: 10%"></Column>
        <Column header="24Th Volume" field="Quantity" sortable style="width: 10%"></Column>
        <Column header="Market Cap" field="Quantity" sortable style="width: 10%"></Column>
        <Column header="Last 7 Days" field="Quantity" sortable style="width: 10%"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

import { onMounted } from 'vue';
import { usePriceStore } from "@/app/stores/main/price.store";
import {storeToRefs} from "pinia";

const store = usePriceStore()
const { assets } = storeToRefs(store)

onMounted(() => {
  store.getTokens()
})

</script>

<style>
thead {
  font-size: 12px !important;
}
tbody {
  font-size: 14px !important;
}

</style>
