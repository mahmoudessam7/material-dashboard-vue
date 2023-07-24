<script setup>
let props = defineProps({
  col1: String,
  col2: String,
  col3: String,
  col4: String
})
</script>
<template>
  <thead>
    <tr>
      <th class="fw-bold opacity-75 text-secondary text-uppercase text-xxs px-4">
        {{ props.col1 }}
      </th>
      <th class="fw-bold opacity-75 text-secondary text-uppercase text-xxs">{{ props.col2 }}</th>
      <th class="fw-bold opacity-75 text-secondary text-uppercase text-xxs">
        {{ props.col3 }}
      </th>
      <th class="fw-bold opacity-75 text-secondary text-uppercase text-xxs">
        {{ props.col4 }}
      </th>
    </tr>
  </thead>
</template>
