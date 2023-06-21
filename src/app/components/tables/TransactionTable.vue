<template>
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
            <i class="pi pu-check-circle"></i>
            <span>{{ slotProps.data.tx_type }}</span>
          </div>
        </template>
      </Column>
      <Column field="" header="Details"  style="width: 15%"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

import {transactions} from "@/app/_mock/assets";

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

const getIcon = (status) => {
  switch (status) {
    case 'SUCCESSFUL':
      return 'pi pi-check';

    case 'PENDING':
      return 'pi pi-exclamation-triangle';

    case 'FAILED':
      return 'pi pi-times';

    default:
      return null;
  }
};

const products = ref(transactions);

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
</style>
