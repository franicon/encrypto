<template>
  <section class="mb-10 w-full">
    <div class="flex xl:flex-row flex-col gap-6">
      <div class="xl:w-[25%] w-full"><BalanceCard/></div>
      <div class="border p-4 grid xl:grid-cols-2 grid-cols-1 gap-4 xl:w-[50%] w-full">
        <Chart/>
        <TopCrypto/>
      </div>
      <div class="xl:w-[25%] w-full">
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
