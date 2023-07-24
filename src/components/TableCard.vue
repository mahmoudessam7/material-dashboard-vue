<script setup>
let props = defineProps({
  title: String
})
</script>
<template>
  <div class="card border-0 shadow">
    <div class="card-header border-0 bg-brand m-4 p-4 rounded shadow mt-n4">
      <h6 class="m-0 fw-semibold text-white">{{ props.title }} Table</h6>
    </div>
    <div class="card-body p-0">
      <slot name="table"></slot>
    </div>
  </div>
</template>
