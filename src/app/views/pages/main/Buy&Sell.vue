<template>
  <div class="w-full h-full xl:mt-14 mb-10">
    <div class="xl:w-[30vw] w-[90vw] border rounded mx-auto p-10 shadow-sm">
      <!--Tabs-->
      <div class="flex gap-3 justify-center">
        <template v-for="tab in tabs" :key="tab.id">
          <button class="px-8 py-3 rounded text-xs font-[500] shadow-lg" :class="isActive(tab.active)"
                  @click="show(tab.id)">
            <i class="pi pi-database"></i> {{ tab.type }}
          </button>
        </template>
      </div>
      <!--Buy-->
      <div class="mt-8" v-if="setTab">
        <Buy/>
      </div>
      <!--Buy-->
      <div class="mt-8" v-else>Sell</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Buy from "@/app/components/buy-sell/Buy.vue";

const tabs = ref([
  {
    id: 1,
    type: 'Buy Aseet',
    active: true
  },
  {
    id: 2,
    type: 'Sell Aseet',
    active: false
  }
]);

const setTab = ref(true)

const show = (id: number) => {
  tabs.value.find(tab => {
    if (tab.id == id) {
      tab.active = true
      setTab.value = false
    } else {
      tab.active = false
      setTab.value = true
    }
  });
}

const isActive = (active: boolean) => {
  switch (active) {
    case true:
      return 'bg-gray-950 text-gray-300 transition-all duration-500';

    case false:
      return 'bg-gray-200';
  }
}

</script>

