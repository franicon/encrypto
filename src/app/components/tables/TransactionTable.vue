<template>
  <div class="card">
    <DataTable :value="products" removableSort tableStyle="min-width: 50rem">
      <Column field="code" header="Code" sortable style="width: 25%"></Column>
      <Column field="name" header="Name" sortable style="width: 25%"></Column>
      <Column field="category" header="Category" sortable style="width: 25%"></Column>
      <Column field="quantity" header="Quantity" sortable style="width: 25%"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import { ref, onMounted } from 'vue';

const products = ref([{
  id: '1000',
  code: 'f230fh0g3',
  name: 'Bamboo Watch',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'Accessories',
  quantity: 24,
  inventoryStatus: 'INSTOCK',
  rating: 5
}]);

</script>
