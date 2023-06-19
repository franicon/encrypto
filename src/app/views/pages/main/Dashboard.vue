<template>
  <section class="mb-10 w-full">
    <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-6 lg:gap-8 md:gap-5 gap-0 content-stretch h-full">
      <!--Wallet Balance-->
      <div class="xl:col-span-1 lg:col-span-2 lg:h-screen h-full">
        <BalanceCard/>
        <div class="mt-6">
          <OwnedAssets/>
        </div>
      </div>
      <!--Chart & Top Crypto-->
      <div class="xl:col-span-2 lg:col-span-4 md:col-span-2 lg:order-1 lg:h-screen h-full">
        <div class="p-3 border rounded">
          <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5">
           <div class=""> <Chart/></div>
            <div class=""><TopCrypto class=""/></div>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-5">
          <div class=""> <TransactionHistory/></div>
          <div class=""><ReferalCard/></div>
        </div>
      </div>
      <!--loader & end Crypto-->
      <div class="relative xl:order-1 md:-order-2 xl:col-span-1 lg:col-span-2 lg:h-screen h-full">
        <BalanceCard/>
        <div class="mt-6">
          <OwnedAssets/>
        </div>
      </div>
      <div class="relative xl:order-1 md:-order-2 xl:col-span-1 lg:col-span-2 xl:hidden hidden lg:flex lg:flex-col lg:justify-between h-screen">
        <div class=""> <TransactionHistory/></div>
        <div class=""><TopCrypto class=""/></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Chart from "@/app/components/Chart.vue";
import TopCrypto from "@/app/components/TopCreypto.vue";
import ReferalCard from "@/app/components/ReferalCard.vue";
import BalanceCard from "@/app/components/shared/BalanceCard.vue";
import OwnedAssets from "@/app/components/shared/OwnedAssets.vue";
import TransactionHistory from "@/app/components/TransactionHistory.vue";
</script>

<style scoped>

</style>
