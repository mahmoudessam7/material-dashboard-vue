<script setup>
let props = defineProps({
  photo: String,
  name: String,
  budget: String,
  status: String,
  completion: String
})
</script>

<template>
  <tr class="border-top">
    <td class="ps-3">
      <div class="d-flex align-items-center gap-3">
        <img :src="`/assets/img/small-logos/${props.photo}.svg`" class="table-icon rounded" />
        <div>
          <h6 class="mb-0 text-sm">{{ props.name }}</h6>
        </div>
      </div>
    </td>
    <td>
      <div class="mt-2">
        <h6 class="mb-0 text-sm text-muted">${{ props.budget }}</h6>
      </div>
    </td>
    <td class="p-0">
      <span class="px-2 py-2 text-capitalize text-sm text-muted">
        {{ props.status }}
      </span>
    </td>

    <!-- <td class="align-middle fw-bold text-xs text-secondary opacity-75">Status</td> -->
    <td class="p-0">
      <div class="progress-wrapper w-75">
        <div class="fw-bold text-xs text-secondary opacity-75 mb-1">{{ props.completion }}</div>
        <div
          class="progress"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
          style="height: 3px"
        >
          <div
            class="progress-bar"
            :class="{
              'bg-success': props.completion === '100%',
              'bg-danger': props.status === 'canceled'
            }"
            :style="{ width: props.completion }"
          ></div>
        </div>
      </div>
    </td>
    <td>
      <a href="javascript:;" class="fw-semibold text-secondary text-sm"
        ><span class="material-symbols-outlined lh-base"> more_vert </span></a
      >
    </td>
  </tr>
</template>
