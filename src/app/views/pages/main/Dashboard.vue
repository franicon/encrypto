<template>
  <section class="mb-10 w-full">
    <div class="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 xl:gap-6 lg:gap-8 md:gap-5 gap-0 content-stretch h-full xl:space-y-0 lg:space-y-0 sm:space-y-10 space-y-10">
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
          <div class="grid xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
           <div class=""> <Chart/></div>
          </div>
        </div>
        <div class="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5  mt-3">
          <div class=""> <TransactionHistory/></div>
          <div class=""><TopCrypto/></div>
        </div>
      </div>
      <!--loader & end Crypto-->
      <div class="relative xl:order-1 md:-order-2 xl:col-span-1 lg:col-span-2 lg:h-screen h-full">
        <NftProfile/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Chart from "@/app/components/Chart.vue";
import TopCrypto from "@/app/components/shared/TopCreypto.vue";
import NftProfile from "@/app/components/nft/NftProfile.vue";
import BalanceCard from "@/app/components/shared/BalanceCard.vue";
import OwnedAssets from "@/app/components/shared/OwnedAssets.vue";
import TransactionHistory from "@/app/components/shared/TransactionHistory.vue";
</script>

<style scoped>

</style>
