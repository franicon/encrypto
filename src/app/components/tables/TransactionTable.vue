<template>
  <Dialog v-model:visible="visible" modal header="Transaction Details"  class="2xl:w-[45vw] xl:w-[50vw] lg:w-[60vw] md:w-[80vw] w-[90vw]">
   <div>
     <p class="pb-2">Transaction Info</p>
     <div class="border rounded flex ">
       <ul class="relative overflow-hidden">
          <li class="flex lg:flex-row flex-col items-center lg:w-[100vw] p-3 lg:p-0  space-y-1 md:space-y-0">
            <div class="lg:w-[20%] xl:w-[14%] lg:p-4 font-[500] text-gray-500 w-full md:text-[15px] text-[14px]">Transaction Date</div>
            <div class="border-b-0 md:border-l lg:p-4 border-b w-full font-[500] md:text-[15px] text-[12px]">22 June, 2023 4:34pm</div>
          </li>
       </ul>
     </div>
   </div>
  </Dialog>

  <div class="card border shadow-sm">
    <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
      <Column field="id" header="Tx ID" sortable style="width: 15%"></Column>
      <Column field="date" header="Date" sortable style="width: 15%"></Column>
      <Column field="asset" header="Asset" sortable style="width: 15%"></Column>
      <Column field="amt" header="Tx Amt" style="width: 15%"></Column>
      <Column field="status" header="Status" sortable style="width: 15%">
        <template #body="{ data }">
          <Tag :value="data.status" :severity="getStatusLabel(data.status)" class="w-full border" />
        </template>
      </Column>
      <Column field="tx_type" header="Tx Type" sortable style="width: 15%">
        <template #body="slotProps">
          <div>
<!--            <i class="pi pu-check-circle"></i>-->
            <span>{{ slotProps.data.tx_type }}</span>
          </div>
        </template>
      </Column>
      <Column field="" header="Details"  style="width: 10%">
        <template #body>
          <Button icon="pi pi-eye" severity="secondary" text rounded aria-label="Bookmark" @click="visible = true" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';
import Column from 'primevue/column';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Divider from 'primevue/divider';


import { transactions } from "@/app/_mock/assets";

import { ref } from 'vue';

const getStatusLabel = (status) => {
  switch (status) {
    case 'SUCCESSFUL':
      return 'success';

    case 'PENDING':
      return 'warning';

    case 'FAILED':
      return 'danger';

    default:
      return null;
  }
};

const products = ref(transactions);

const visible = ref(false);

</script>

<style>
thead {
  font-size: 12px !important;
}
tbody {
  font-size: 12px !important;
}
.p-tag-value {
  font-size: 11px !important;
  font-weight: 600;
  text-align: left !important;
}
td {
  padding: 0 20px !important;
  margin: 0 !important;
}
</style>
