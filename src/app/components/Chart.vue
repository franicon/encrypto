
<template>
  <div class="card relative my-10">
    <div class="flex justify-between mb-4">
     <div class="order-1">
       <div class="">
         <button class="bg-gray-950 text-white px-3 py-1 rounded text-xs">Ads</button>
       </div>
     </div>
      <div class="">
        <div class="font-semibold text-xl">ETH</div>
        <div class="font-semibold text-xl">20,000.01</div>
      </div>
    </div>
    <Chart type="bar" :data="chartData" :options="chartOptions" class="h-96" />
<!--    <div class="flex justify-start items-start gap-4 text-center mt-4 ">-->
<!--      <button class="py-2 bg-gray-950 text-gray-200 w-60  font-semibold rounded">Sell</button>-->
<!--      <button class="py-2 bg-gray-200 text-gray-900 w-60  font-semibold rounded">BUY</button>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  const documentStyle = getComputedStyle(document.documentElement);

  return {
    labels: ['Jan', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'oct', 'nov', 'dec'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: documentStyle.getPropertyValue('--surface-800'),
        borderWidth: 2,
        fill: false,
        tension: 0.4,
        data: [50, 25, 12, 48, 56, 76, 42, 50, 25, 12, 48, 56, 76, 42]
      },
      {
        type: 'bar',
        label: 'Dataset 2',
        backgroundColor: documentStyle.getPropertyValue('--surface-500'),
        data: [21, 84, 24, 75, 37, 65, 34, 21, 84, 24, 75, 37, 65, 34],
        borderColor: 'white',
        borderWidth: 2
      },

      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: documentStyle.getPropertyValue('--surface-300'),
        data: [41, 52, 24, 74, 23, 21, 32, 41, 52, 24, 74, 10, 21, 32]
      }
    ]
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      },
      y: {
        ticks: {
          color: textColorSecondary
        },
        grid: {
          color: surfaceBorder
        }
      }
    }
  };
}
</script>
