<script setup>
import Hr from '@/components/Hr.vue'
let props = defineProps({
  icon: String,
  heading: String,
  number: String
})
</script>

<template>
  <div class="card border-0 shadow p-3 h-100">
    <div class="card-heading text-center">
      <span class="d-inline-block bg-brand text-white p-3 mb-3 mx-auto rounded-3">
        <span class="material-symbols-outlined fs-3"> {{ props.icon }} </span>
      </span>
    </div>
    <div class="card-body p-0 text-center">
      <h6 class="mb-1 fw-semibold">{{ props.heading }}</h6>
      <p class="mb-3 text-muted text-sm"><slot></slot></p>
      <Hr tone="dark"></Hr>
      <h5 class="fw-semibold text-dark mb-0">{{ props.number }}</h5>
    </div>
  </div>
</template>
<style lang="scss" scoped>
h5 {
  opacity: 0.8;
}
</style>
