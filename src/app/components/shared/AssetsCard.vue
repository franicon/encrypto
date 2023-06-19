<template>
  <!--assets-->
 <div>
   <template v-if="owned">
     <div :class="'flex justify-between items-center px-4 ' + styleProp" v-for="asset in assets" :key="asset.code">
       <div class="flex gap-2 items-center">
         <div class="border p-2 rounded bg-gray-50"><img class="w-5 h-5"  :src="'/coin/' + asset.img" alt="asset.code"></div>
         <div>
           <div class="text-sm font-semibold text-gray-600">{{asset.name}}</div>
           <div class="text-xs font-normal">{{asset.code}}</div>
         </div>
       </div>
       <div>
         <div class="text-end">
           <div class="text-sm font-semibold text-gray-600">{{asset.asset_value}}</div>
           <div class="text-xs font-semibold text-gray-400">{{ asset.fiat_value }} USD</div>
         </div>
       </div>
     </div>
   </template>
   <template v-else>
     <div :class="'flex justify-between items-center ' + styleProp" v-for="asset in assets" :key="asset.code">
       <div class="flex gap-3 items-center my-2">
         <div class="border p-2 rounded bg-gray-50"><img class="w-5 h-5"  :src="'/coin/' + asset.img" alt="asset.code"></div>
         <div>
           <div class="text-[12px] font-semibold text-gray-600">{{asset.code}}</div>
           <div class="text-xs  text-gray-600">{{asset.name}}</div>
         </div>
       </div>
       <div>
         <div class="text-end">
           <div class="text-xs font-semibold text-gray-500">{{asset.rate}}</div>
           <template v-if="asset.change.includes('-')">
             <div class="text-xs font-semibold text-gray-100 mt-1 py-[1px] bg-red-500 text-center rounded">{{ parseFloat(asset.change) }}%</div>
           </template>
           <template v-else>
             <div class="text-xs font-semibold text-gray-100 mt-1 py-[1px] bg-emerald-500 text-center rounded" >{{ parseFloat(asset.change) }}%</div>
           </template>
         </div>
       </div>
     </div>
   </template>
 </div>
</template>

<script setup lang="ts">
defineProps<{assets: Array<string>[], styleProp: string, owned:boolean, fav: boolean, top:boolean}>()
</script>

<style scoped>

</style>
