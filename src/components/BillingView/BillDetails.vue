<script setup>
let props = defineProps({
  name: String,
  company: String,
  email: String,
  vat: String
})
</script>
<template>
  <li class="list-group-item border-0 bg-gray-100 p-4 d-flex justify-content-between">
    <div class="d-flex flex-column gap-1">
      <h6>{{ props.name }}</h6>
      <span class="text-secondary text-xs"
        >Company Name: &nbsp; <span class="fw-semibold text-dark">{{ props.company }}</span>
      </span>
      <span class="text-secondary text-xs"
        >Email Address: &nbsp;
        <span class="fw-semibold text-dark">{{ props.email }}</span>
      </span>
      <span class="text-secondary text-xs"
        >VAT number: &nbsp;
        <span class="fw-semibold text-dark">{{ props.vat }}</span>
      </span>
    </div>
    <div class="d-flex gap-3 align-self-baseline">
      <a href="javascript:;" class="d-flex gap-1 text-sm text-danger align-items-center fw-semibold"
        ><span class="material-symbols-outlined fs-6"> delete </span>Delete</a
      >
      <a href="javascript:;" class="d-flex gap-1 text-sm text-muted align-items-center fw-semibold"
        ><span class="material-symbols-outlined fs-6"> edit </span>Edit</a
      >
    </div>
  </li>
</template>
