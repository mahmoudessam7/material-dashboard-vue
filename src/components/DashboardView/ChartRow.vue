<script setup>
import ChartCard from '@/components/DashboardView/ChartCard.vue'
let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
let months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let chartData1 = [50, 20, 10, 22, 50, 10, 40]
let chartData2 = [50, 40, 300, 320, 500, 350, 200, 230, 500]
let chartData3 = [100, 150, 300, 320, 500, 350, 400, 230, 300]
</script>
<template>
  <div class="row row-cols-3">
    <ChartCard :labels="days" :chartData="chartData1" chartID="chart1" cardStyle="brand"
      ><template #heading>Website Views</template>
      <template #default>Last Campaign Performance</template>
      <template #footing>campaign sent 2 days ago</template>
    </ChartCard>
    <ChartCard :labels="months" :chartData="chartData2" chartID="chart2" cardStyle="green">
      <template #heading>Daily Sales</template>
      <template #default>(<strong>+15%</strong>) increase in today sales.</template>
      <template #footing>updated 4 min ago</template>
    </ChartCard>
    <ChartCard :labels="days" :chartData="chartData3" chartID="chart3" cardStyle="dark">
      <template #heading>Completed Tasks</template>
      <template #default>Last Campaign Performance</template>
      <template #footing>just updated</template>
    </ChartCard>
  </div>
</template>
