<script setup>
let props = defineProps({
  name: String,
  email: String,
  position: String,
  department: String,
  online: Boolean,
  date: String,
  photo: String
})

let status = props.online ? 'Online' : 'Offline'
</script>

<template>
  <tr class="border-top">
    <td class="ps-3">
      <div class="d-flex align-items-center gap-3">
        <img
          :src="`/assets/img/${props.photo}.jpg`"
          alt="Adobe Xd Logo"
          class="table-icon rounded"
        />
        <div>
          <h6 class="mb-0 text-sm">{{ props.name }}</h6>
          <p class="mb-0 text-sm text-muted">{{ props.email }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="mt-2">
        <h6 class="mb-0 text-sm text-muted">{{ props.position }}</h6>
        <p class="mb-0 text-xs text-muted">{{ props.department }}</p>
      </div>
    </td>
    <td class="p-0">
      <span
        class="badge bg-gradient px-2 py-2 text-white"
        :class="{ 'bg-success': props.online, 'bg-secondary': !props.online }"
      >
        {{ status }}
      </span>
    </td>

    <!-- <td class="align-middle fw-bold text-xs text-secondary opacity-75">Status</td> -->
    <td class="p-0">
      <span class="fw-semibold text-sm text-muted ps-2">{{ props.date }}</span>
    </td>
    <td>
      <a href="javascript:;" class="fw-semibold text-secondary text-sm">Edit</a>
    </td>
  </tr>
</template>
<style lang="scss" scoped>
@import '../public/assets/main.scss';
</style>
