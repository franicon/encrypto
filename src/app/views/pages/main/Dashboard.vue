<template>
  <section class="mb-10 w-full">
    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-6 lg:gap-6 md:gap-5 gap-0">
      <!--Wallet Balance-->
      <div>
        <BalanceCard/>
        <div class="mt-6">
          <OwnedAssets/>
        </div>
      </div>
      <!--Chart & Top Crypto-->
      <div class="xl:col-span-2 lg:col-span-2 lg:order-1">
        <div class="">
          <div class="">
            <Chart/>
            <TopCrypto class="mt-10"/>
          </div>
        </div>
      </div>
      <div class="relative xl:order-1">
        <BalanceCard/>
        <div class="mt-6">
          <OwnedAssets/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Chart from "@/app/components/Chart.vue";
import TopCrypto from "@/app/components/TopCreypto.vue";
import BalanceCard from "@/app/components/shared/BalanceCard.vue";
import OwnedAssets from "@/app/components/shared/OwnedAssets.vue";
import TransactionHistory from "@/app/components/TransactionHistory.vue";
</script>

<style scoped>

</style>
