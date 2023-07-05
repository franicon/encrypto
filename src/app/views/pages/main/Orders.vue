<template>
  <div>
    <h1 class="text-md">Here are your assets | wallets!</h1>
    <div class="my-6">
      <h1 class="text-xl font-semibold">Fiat Wallets</h1>
      <div class="pt-6 grid xl:grid-cols-4 grid-cols-1 gap-4">
        <!--NGN-->
        <div class="">
          <div class="md:shadow-2xl border relative space-y-2">
            <div class="px-5 pt-5 pb-3 flex items-center space-x-5">
              <i class="pi pi-money-bill text-gray-900" style="font-size: 2rem"></i>
              <span class="font-medium text-md text-gray-600">NGN Account</span>
            </div>
            <div class="px-5 pb-3">
              <h1 class="text-2xl font-semibold">56,439.00 NGN</h1>
              <p class="text-sm font-semibold pt-1 text-gray-600">72.82 USD</p>
            </div>
            <hr>
            <div class="pb-4 pt-4 px-5">
              <div class=" flex justify-evenly text-center">
                <div
                    class="w-36 text-xs cursor-pointer border hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-900 font-[400]">
                  Withdraw All Earning
                </div>
                <div
                    class="w-36 text-xs cursor-pointer border bg-gray-800 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-100 font-[400]">
                  Add Money
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--EUR-->
        <div class="">
          <div class="md:shadow-2xl border relative space-y-2 bg-gray-800 text-gray-50">
            <div class="px-5 pt-5 pb-3 flex items-center space-x-5">
              <i class="pi pi-money-bill text-gray-50" style="font-size: 2rem"></i>
              <span class="font-medium text-md text-gray-100">EUR Account</span>
            </div>
            <div class="px-5 pb-3">
              <h1 class="text-2xl font-semibold text-gray-100">72.82 EUR</h1>
              <p class="text-sm font-semibold pt-1 text-gray-200">72.82 USD</p>
            </div>
            <hr>
            <div class="pb-4 pt-4 px-5">
              <div class=" flex justify-evenly text-center">
                <button class="w-36 text-xs cursor-pointer bg-gray-50 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-900 font-[400]">
                  Withdraw All Earning
                </button>
                <div class="w-36 text-xs cursor-pointer border bg-gray-800 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-100 font-[400]">
                  Add Money
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--USD-->
        <div class="">
          <div class="md:shadow-2xl border relative space-y-2">
            <div class="px-5 pt-5 pb-3 flex items-center space-x-5">
              <i class="pi pi-money-bill text-gray-900" style="font-size: 2rem"></i>
              <span class="font-medium text-md text-gray-600">USD Account</span>
            </div>
            <div class="px-5 pb-3">
              <h1 class="text-2xl font-semibold">72.82 USD</h1>
              <p class="text-sm font-semibold pt-1 text-gray-600">72.82 USD</p>
            </div>
            <hr>
            <div class="pb-4 pt-4 px-5">
              <div class=" flex justify-evenly text-center">
                <div class="w-36 text-xs cursor-pointer border hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-900 font-[400]">
                  Withdraw All Earning
                </div>
                <div class="w-36 text-xs cursor-pointer border bg-gray-800 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-100 font-[400]">
                  Add Money
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="my-6">
      <h1 class="text-xl font-semibold">Asset Wallets</h1>
      <div class="pt-6 grid xl:grid-cols-4 grid-cols-1 gap-4">
        <!--NGN-->
        <div class="">
          <div class="md:shadow-2xl border relative space-y-2">
            <div class="px-5 pt-5 pb-3 flex items-center space-x-5">
<!--              <i class="pi pi-money-bill text-gray-900" style="font-size: 2rem"></i>-->
              <span class="font-medium text-md text-gray-600">ETH Wallet</span>
            </div>
            <div class="px-5 pb-3">
              <h1 class="text-2xl font-semibold">0.03524 ETH</h1>
              <p class="text-sm font-semibold pt-1 text-gray-600">72.82 USD</p>
            </div>
            <hr>
            <div class="pb-4 pt-4 px-5">
              <div class=" flex justify-evenly text-center">
                <div
                    class="w-36 text-xs cursor-pointer border hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-900 font-[400]">
                  Sell Asset
                </div>
                <div
                    class="w-36 text-xs cursor-pointer border bg-gray-800 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-100 font-[400]">
                  Buy Asset
                </div>
              </div>
            </div>
          </div>

        </div>
        <!--USD-->
        <div class="">
          <div class="md:shadow-2xl border relative space-y-2">
            <div class="px-5 pt-5 pb-3 flex items-center space-x-5">
              <span class="font-medium text-md text-gray-600">USD Account</span>
            </div>
            <div class="px-5 pb-3">
              <h1 class="text-2xl font-semibold">72.82 USD</h1>
              <p class="text-sm font-semibold pt-1 text-gray-600">72.82 USD</p>
            </div>
            <hr>
            <div class="pb-4 pt-4 px-5">
              <div class=" flex justify-evenly text-center">
                <div class="w-36 text-xs cursor-pointer border hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-900 font-[400]">
                 Sell Asset
                </div>
                <div class="w-36 text-xs cursor-pointer border bg-gray-800 hover:bg-gray-700 hover:text-gray-100 transition-all duration-500 py-3 text-gray-100 font-[400]">
                  Buy Asset
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
