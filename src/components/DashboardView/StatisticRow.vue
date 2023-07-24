<script setup>
import StatisticCard from '@/components/DashboardView/StatisticCard.vue'
</script>
<template>
  <div class="row">
    <StatisticCard
      icon="payments"
      heading="Today's Money"
      number="$53k"
      percentage="+55"
      duration="than last week"
      color="dark"
    ></StatisticCard>
    <StatisticCard
      icon="person"
      heading="Today's Users"
      number="2,300"
      percentage="+3"
      duration="than last month"
      color="brand"
    ></StatisticCard>
    <StatisticCard
      icon="person"
      heading="New Clients"
      number="3,462"
      percentage="-2"
      duration="than yesterday"
      color="green"
    ></StatisticCard>
    <StatisticCard
      icon="moving"
      heading="Sales"
      number="$103,430"
      percentage="+5"
      duration="than yesterday"
      color="blue"
    ></StatisticCard>
  </div>
</template>
