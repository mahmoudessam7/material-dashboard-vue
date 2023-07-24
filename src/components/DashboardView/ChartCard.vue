<script setup>
import Chart from 'chart.js/auto'
import Hr from '@/components/Hr.vue'

import { onMounted } from 'vue'

const props = defineProps({
  labels: Array,
  chartData: Array,
  chartID: String,
  cardStyle: String
})

function chartType() {
  if (props.chartID === 'chart1') {
    return 'bar'
  } else if (props.chartID === 'chart2' || props.chartID === 'chart3') {
    return 'line'
  }
}

onMounted(() => {
  const ctx = document.getElementById(props.chartID)
  new Chart(ctx, {
    type: chartType(),
    data: {
      labels: props.labels,
      datasets: [
        {
          label: 'Sales',
          data: props.chartData,
          borderWidth: 1,
          barThickness: 10,
          borderColor: 'rgba(255,255,255,0.5)',
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      layout: {
        padding: 20
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(255,255,255,0.2)'
          },
          ticks: {
            color: 'rgba(255,255,255,0.8)'
          }
        },
        x: {
          grid: {
            color: 'rgba(255,255,255,0.2)'
          },
          ticks: {
            color: 'rgba(255,255,255,0.8)'
          }
        }
      }
    }
  })
})
</script>
<template>
  <div class="col mt-5">
    <div class="card border-0 shadow px-4">
      <div
        class="chart-header mt-n4 py-4 bg-brand rounded-5 shadow"
        :class="{
          'bg-brand': cardStyle === 'brand',
          'bg-dark bg-gradient': cardStyle === 'dark',
          'bg-success bg-gradient': cardStyle === 'green'
        }"
      >
        <div class="chart">
          <canvas :id="props.chartID" class="mx-auto"></canvas>
        </div>
      </div>
      <div class="chart-body px-2 py-4">
        <h6 class="mb-0 fw-bold">
          <slot name="heading"></slot>
        </h6>
        <div class="text-sm opacity-75 mt-1">
          <slot></slot>
        </div>
        <Hr tone="dark" class="mt-3 mb-3"></Hr>
        <div class="d-flex align-items-center gap-1 opacity-75">
          <span class="material-symbols-outlined opacity-50"> schedule </span>
          <p class="text-sm mb-0">
            <slot name="footing"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../public/assets/variables.scss';
@import '../node_modules/bootstrap/scss/bootstrap';

.material-symbols-outlined {
  font-size: 1rem;
}
</style>
