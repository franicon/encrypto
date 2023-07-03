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
        <Column header="Price" field="current_price" sortable style="width: 10%">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <span> $ {{ data.current_price.toLocaleString() }}</span>
            </div>
          </template>
        </Column>
        <Column header="High 24h" field="high_24h" sortable style="width: 10%">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <i class="pi text-emerald-500 pi-arrow-up" style="font-size: 0.7rem"></i>
              <span>{{ data.high_24h.toLocaleString() }}</span>
            </div>
          </template>
        </Column>
        <Column header="low 24h" field="low_24h" sortable style="width: 10%">
          <template #body="{ data }">
            <div class="flex items-center gap-2">
              <i class="pi text-red-600 pi-arrow-down" style="font-size: 0.7rem"></i>
              <span>{{ data.low_24h.toLocaleString() }}</span>
            </div>
          </template>
        </Column>
        <Column header="24Th change" field="price_change_24h" sortable style="width: 10%"></Column>
        <Column header="Market Cap" field="market_cap" sortable style="width: 10%"></Column>
        <Column header="Market Rank" field="market_cap_rank" sortable style="width: 10%"></Column>
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
