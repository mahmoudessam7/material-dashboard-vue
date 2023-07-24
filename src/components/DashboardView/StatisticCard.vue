<script setup>
import Hr from '@/components/Hr.vue'

defineProps({
  icon: String,
  heading: String,
  number: String,
  percentage: String,
  duration: String,
  color: String
})
</script>
<template>
  <div class="col">
    <div class="bg-white rounded-4 shadow py-3 px-3">
      <div
        class="align-items-center d-flex icon justify-content-center rounded-4 text-white mt-n4 position-absolute shadow"
        :class="{
          'bg-brand': color === 'brand',
          'bg-dark bg-gradient': color === 'dark',
          'bg-success bg-gradient': color === 'green',
          'bg-primary bg-gradient': color === 'blue'
        }"
      >
        <span class="material-symbols-outlined"> {{ icon }} </span>
      </div>
      <p class="mb-0 text-end">{{ heading }}</p>
      <h4 class="mb-0 pb-3 text-end">{{ number }}</h4>
      <Hr tone="dark"></Hr>
      <div class="card-footer">
        <p class="mb-0 opacity-75">
          <span
            class="fw-bold me-1 opacity-100"
            :class="{ 'text-success': percentage > 0, 'text-danger': percentage < 0 }"
            >{{ percentage }}%</span
          >{{ duration }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '../public/assets/variables.scss';
@import '../node_modules/bootstrap/scss/bootstrap';
.icon {
  height: 4rem;
  width: 4rem;
}

.bg-green {
  background-image: $bg-brand;
}
</style>
