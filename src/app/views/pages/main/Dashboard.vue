<template>
  <section class="mb-10 w-full">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      <div class=""><BalanceCard/></div>
      <div class="col-span-2 ">
        <div class="border p-4 grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 w-full">
          <Chart/>
          <TopCrypto/>
        </div>
      </div>
      <div class="">
        <BalanceCard/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Chart from "@/app/components/Chart.vue"
import TopCrypto from "@/app/components/shared/TopCreypto.vue"
import BalanceCard from "@/app/components/shared/BalanceCard.vue"
</script>

<style scoped>

</style>
