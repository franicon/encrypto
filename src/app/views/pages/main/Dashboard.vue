<template>
  <section class="mb-10 w-full">
    <div class="flex md:flex-row flex-cols flex-grow gap-6">
      <div class="w-[25%]"><BalanceCard/></div>
      <div class="border p-4 grid xl:grid-cols-2 grid-cols-1 gap-4 w-[50%]">
        <BalanceCard/>
        <BalanceCard/>
        <BalanceCard/>
        <BalanceCard/>
      </div>
      <div class="w-[25%]">
        <BalanceCard/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BalanceCard from "@/app/components/shared/BalanceCard.vue"
</script>

<style scoped>

</style>
