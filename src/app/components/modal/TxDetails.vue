<template>
  <Dialog v-model:visible="collapseBar" modal header="Transaction Details"  class="2xl:w-[45vw] xl:w-[50vw] lg:w-[60vw] md:w-[80vw] w-[90vw]">
    <div>
      <p class="pb-2">Transaction Info</p>
      <div class="border rounded flex ">
        <ul class="relative overflow-hidden">
          <li class="flex lg:flex-row flex-col items-center lg:w-[100vw] p-3 lg:p-0  space-y-1 md:space-y-0">
            <div class="lg:w-[20%] xl:w-[14%] lg:p-4 font-[500] text-gray-500 w-full md:text-[15px] text-[14px]">Transaction Date</div>
            <div class="border-b-0 md:border-l lg:p-4 md:border-b w-full font-[500] md:text-[15px] text-[12px]">22 June, 2023 4:34pm</div>
          </li>
          <li class="flex lg:flex-row flex-col items-center lg:w-[100vw] p-3 lg:p-0  space-y-1 md:space-y-0">
            <div class="lg:w-[20%] xl:w-[14%] lg:p-4 font-[500] text-gray-500 w-full md:text-[15px] text-[14px]">Transaction Status</div>
            <div class="border-b-0 md:border-l lg:p-4 md:border-b w-full font-[500] md:text-[15px] text-[12px]">22 June, 2023 4:34pm</div>
          </li>
          <li class="flex lg:flex-row flex-col items-center lg:w-[100vw] p-3 lg:p-0  space-y-1 md:space-y-0">
            <div class="lg:w-[20%] xl:w-[14%] lg:p-4 font-[500] text-gray-500 w-full md:text-[15px] text-[14px]">Transaction Type</div>
            <div class="border-b-0 md:border-l lg:p-4 border-b w-full font-[500] md:text-[15px] text-[12px]">BUY</div>
          </li>
        </ul>
      </div>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useModalStore} from "@/app/stores/other/modal";

const store = useModalStore()
const { collapseBar } = storeToRefs(store)
</script>

<style scoped>

</style>
